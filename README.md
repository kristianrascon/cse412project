# cse412project
The application is an automated sports article generator. We will focus on football, specifically
the National Football League (NFL). The application will be web based. It will give users (e.g.,
reporters) the ability to interact with the data and selection options to quickly create a news
article. Users will be able to select an article type, select an NFL player, along with the relevant
details based on the selected article type. The output of the web application is an article created
based on the user selections.
The article types will include:
● Injury - for when a player sustains an injury
● Retirement - for when a player retires
● Suspension - for when the league or team suspends a player
● Trade - for when one team trades a player to another team
The article will be dynamic based on user selection and player and team related data within the
database. The details necessary to dynamically construct the article will be stored in the Articles
table within the database. The article will include information about the NFL player’s team,
record, and upcoming schedule. To accomplish this, NFLTeams, NFLPlayers, NFLSchedule, and
NFLRecords are core database tables, detailed in the following section within the ER Diagram.
At a high-level, NFL teams have players. Players can only be associated with one team at a time,
but may be a free-agent (i.e., not associated with a team currently). NFL Teams each have a
record for a given season stored in the NFLRecords table. Finally, NFL Teams play each other
captured in the NFLSchedule table. Teams may play other teams in the league zero, once, or
multiple times within the same season.
The articles will display a photo for the NFL player. The photo will either be a headshot sourced
by the NFL data API, or a unique photo, which will be stored on the server and named according
to the Player ID along with the credit for the original photographer.
The articles will also display three (3) articles as recent news related to the NFL underneath the
user selected, automatically generated content.
The web application will be hosted such that it is available to the public.
