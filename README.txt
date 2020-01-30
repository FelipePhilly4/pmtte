.-.__      \ .-.  ___  __
|_|  '--.-.-(   \/\;;\_\.-._______.-.
(-)___     \ \ .-\ \;;\(   \       \ \
 Y    '---._\_((Q)) \;;\\ .-\     __(_)
 I           __'-' / .--.((Q))---'    \,
 I     ___.-:    \|  |   \'-'_          \
 A  .-'      \ .-.\   \   \ \ '--.__     '\
 |  |____.----((Q))\   \__|--\_      \     '
    ( )        '-'  \_  :  \-' '--.___\
     Y                \  \  \       \(_)
     I                 \  \  \         \,
     I                  \  \  \          \
     A                   \  \  \          '\
     |              snd   \  \__|           '
                           \_:.  \
                             \ \  \
                              \ \  \
                               \_\_|

PROJET DE SOUTENANCE

Sujet :
-------
Le sujet est libre, mais pour le jeu de rôle, faites comme si le sujet avait été choisi par le client.

    .----.   @   @
   / .-"-.`.  \v/
   | | '\ \ \_/ )
 ,-\ `-.' /.'  /
'---`----'----'

Technique :
-----------
- 10 min de présentation
- 5 min d'échanges

    .----.   @   @
   / .-"-.`.  \v/
   | | '\ \ \_/ )
 ,-\ `-.' /.'  /
'---`----'----'

Livrables :
-----------
Dans le dossier Projets/ sur Google Drive, vous allez devoir créer un dossier : "Nom Prénom".
Ce dossier devra contenir les fichiers suivants :
- package.json
- package-lock.json
- README.txt
et le dossier qui contient tout votre travail :
- src/
IL NE DOIT PAS CONTENIR LES DOSSIERS SUIVANTS : dist/ et node_modules/
Aussi, si vous avez des vidéos ou des images beaucoup trop lourde > 1Mo je vous invite à les redimensionner.


    .----.   @   @
   / .-"-.`.  \v/
   | | '\ \ \_/ )
 ,-\ `-.' /.'  /
'---`----'----'

Contexte :
----------
Vous êtes en charge de créer la partie administration d'un site internet pour un client grand compte.
Le projet sera jalonné par des réunions intermédiaires avec le Directeur Technique (Matthieu).
Vendredi 22 novembre aura lieu votre première réunion avec le DT.
Au niveau du planning vous êtes censé présenter :
- la page de connexion ;
- un tableau de bord ;
- et une page d'édition d'un contenu.

    .----.   @   @
   / .-"-.`.  \v/
   | | '\ \ \_/ )
 ,-\ `-.' /.'  /
'---`----'----'

Technologies :
--------------
Le DT est à l'aise avec certaines technologies qui devront obligatoirement être utilisées :
- Stack NPM (fournie)
- Framework CSS : Bootstrap
- Pré-processeur HTML : Pug, pour une interface qui a du chien
- Pré-processeur CSS : Sass, si vous souhaitez ajouter votre touch'

    .----.   @   @
   / .-"-.`.  \v/
   | | '\ \ \_/ )
 ,-\ `-.' /.'  /
'---`----'----'

1. Page de connexion :
----------------------
Véritable entrée vers la partie administration elle devra donner envie de voir la suite.
Elle devra comporter au minimum les informations suivantes :
- Titre
- Formulaire avec label + input pour le mail et le password ainsi qu'un bouton de validation
- Au clique sur le bouton de validation l'utilisateur est renvoyé sur le tableau bord

    .----.   @   @
   / .-"-.`.  \v/
   | | '\ \ \_/ )
 ,-\ `-.' /.'  /
'---`----'----'

2. Tableau de bord :
--------------------
Cette page met à disposition un aperçu global des données du site triées par type.
Elle devra comporter au minimum :
- Un header fixe avec un logo. Il est possible d'y ajouter un menu comprenant plusieurs entrées, même si celles-ci ne sont pas encore activées. (ex : Articles - Pages - Médias - etc...)
- Un tableau présentant les Articles existants sur le site avec les informations classiques : Titre, Date de création, Date de modification, etc... avec la possibilité de modifier (renvoi vers la page d'édition d'un contenu) ou de supprimer un article.
- Un bouton de création d'article qui redirigera vers la page d'édition d'un contenu.

    .----.   @   @
   / .-"-.`.  \v/
   | | '\ \ \_/ )
 ,-\ `-.' /.'  /
'---`----'----'

3. Page d'édition de contenu :
------------------------------
Cette page sert à ajouter du contenu à notre site.
Elle devra comporter au minimum :
- Un champ Titre
- Un champ Image à la une
- Une zone de texte
- Selon votre expertise : tous les champs que vous jugerez utiles en fonction du sujet
- Un bouton Enregistrer
- Un bouton Aperçu, au clique renvoi l'utilisateur sur la page du contenu côté Front

    .----.   @   @
   / .-"-.`.  \v/
   | | '\ \ \_/ )
 ,-\ `-.' /.'  /
'---`----'----'

4. Page de présentation de contenu côté Front :
-----------------------------------------------
Arf, malheureusement, votre collègue intégrateur est toujours bloqué dans l'escalator et il devait présenter la page de contenu le même jour que vous. Pas grave, j'imagine qu'avec vos compétences vous allez pouvoir vous en charger, voici le brief du client concernant le design : classique mais original, kitsch mais sobre, bling bling mais pas trop clinquant, bref faites comme vous le sentez... Mais faut que ça plaise au client.
