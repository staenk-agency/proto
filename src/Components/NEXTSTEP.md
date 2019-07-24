A continuer : 
- tests des différents composants

Construction du code : 
calendarContainer est le composant majeur de l'application; contient tous les state et fonctions qui sont passés aux composants enfants.
3 vues différentes pour le calendrier : 

- mois => calendarMonth
    dayMonthView est son composant enfant et représente un jour dans le mois.
    Tous les dayMonthView sont dans une grille css, 7 colonnes et lignes en automatique pour les mois à 4 lignes VS mois à 6 lignes.
    Pour organiser les jours dans les bonnes colonnes, utilisation d'une className "position + dayOfWeek" calculée en fonction du jour de la semaine (ex: lundi est jour 1 de la semaine et = postion0, mardi jour 2 de la semaine et = position1 etc..)

- semaine => calendarWeek
    dayWeekView est son composant enfant et représente un jour dans la semaine.
    Tous les dayWeekView sont dans une grille css, 7 colonnes et 1  ligne.
    Pour organiser les jours dans les bonnes colonnes, utilisation d'une className "position + day.format('d') " calculée en fonction du jour de la semaine (ex: lundi est jour 1 de la semaine et = postion1, mardi jour 2 de la semaine et = position2 dimanche est jour 0 et position = 0 etc..)


- jour => calendarDay
dayHourView est son composant enfant
    Pas finalisé mais même principe.


Pour les évenements => 
Chaque composant dayMonthView et dayWeekView a un composant enfant Events, qui affiche un composant enfant EventCard si un évenement est prévu ce jour là.
Les évenements sont affichés par demie journée, morning & afternoon.

- Mois => affichage de deux évements à la suite OU si plus de deux évenements => 1 évenement + le bouton "..." qui permet d'ouvrir le modal.
- Semaine => affichage de deux évements à la suite OU si plus de deux évenements => 2 évenements + le bouton "..." qui permet d'ouvrir le modal.
- Jour => Pas finalisé mais même principe.