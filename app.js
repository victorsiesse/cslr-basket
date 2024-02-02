require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT;
const mailPassword = process.env.MAIL_PASSWORD;


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cslrbasket.noreply@gmail.com',
      pass: mailPassword,
    },
  });

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


app.post('/contact', (req, res) => {
    const { firstname, lastname, mail, subject, message } = req.body;
  
    const mailOptions = {
      from: 'cslrbasket.noreply@gmail.com',
      to: 'cslrbasket.contact@gmail.com', 
      subject: `Message de ${firstname} ${lastname}: ${subject}`,

      text: `
      Nom: ${lastname} ${firstname}
      Adresse mail: ${mail}
      
      Message: ${message}
    `
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error.message);
          res.json({ success: false, message: "Une erreur s'est produite lors de l'envoi du message." });
        } else {
          console.log('Message sent: %s', info.messageId);
          res.json({ success: true, message: 'Votre message a été envoyé avec succès.' });
        }
    });
 });

 app.post('/commande', (req, res) => {
  const { prenom, nom, mail, sujet, modele,taille, couleur} = req.body;

  const mailOptions = {
    from: 'cslrbasket.noreply@gmail.com',
    to: 'cslrbasket.commande@gmail.com', 
    subject: `Message de ${prenom} ${nom}: Commande`,

    text: `
    Nom: ${prenom} ${nom}
    Adresse mail: ${mail}
    
    Modele : ${modele}
    Taille : ${taille}
    Couleur : ${couleur}
  `
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error.message);
        res.json({ success: false, message: "Une erreur s'est produite lors de l'envoi de la commande" });
      } else {
        console.log('Message sent: %s', info.messageId);
        res.json({ success: true, message: 'Votre commande a bien été envoyé.' });
      }
  });
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});


