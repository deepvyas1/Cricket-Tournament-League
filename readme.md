# This respository consist of all the APIs related to a cricket Tournament League

Note: Only authenicated users will be allowed to get or insert data. This is implemented using JWT token.
      If this token is not provided in the request user will not will allowed to perform any actions.


#Assumptions:
1. This is a international League, so every country will be having only one team.
2. There are two sides of the APIs:-
    1. Admin: APIs related to admins will insert and update data related to the tournament.
    2. User: APIs related to user are only get request and will serve the data.

1. User related APIs:- Base URL: /v1/api/user/cricket
    1. /player/list:- This will return list of all the players playing in the tournament.
    2. /player/list/:countryId: This will return players of particular country.
        request params:-
            1. countryId: Name of the country to be passed as paramter in the request.
    3. /player/:id: This will return details about a particular player 
        request params:-
            1. id: id of the player.
    4. /team/list: This will return details of all teams playing in this tournament.
    5. /team/:countryId: This will return details of a team of a country playing in this tournament.
        request params:-
            1. countryId: Name of the country
    6. /countries/list: This will return details of all countries playing in this tournament.
    7. /venues/list: This will return details of all venues in this tournament.
    8. /venues/list/:countryId: This will return details of all venues in a particular country in this tournament.
        request params:-
            1. countryId: Name of the country.
    9. /match/list: This will return details of a particular match played in this tournament.
    10. /tournament/summary: This will return details summary of this tournament.

2. Admin related APIs:- Base URL: /v1/api/admin
    1. /country/insert: This to insert details of new country.
        request body:-
            1. countryName: Name of the country.

    2. /venue/insert: This is to insert details of new venue in country.
         request body:-
            1. countryName: Name of the country.
            2. name: name of the venue
            3. city: city of the venue.
    
    3. /team/insert: This is to insert details about a new team.
         request body:-
            1. countryName: Name of the country.

    4. /player/insert: This is to enter details about new player
         request body:-
            1. countryName: Name of the country.
            2. name: name of the player.
            3. age: age of the player
            4. profile: it can be either batsman or bowler or wicketkeeper-batsman.

    5. /match/insert: This is to enter details about a match.
        request body:
            1. country1Name = Name of the 1st country or team;
            2. country2Name = Name of the 2nd country or team;
            3. isDraw = whether match was drawn or not it can be either true or false;
            4. team1Score = Socre of team 1;
            5. team2Score = Score of team 2;
            6. manOfMatch = ID of the player who was man of the match ;
            7. bestBowler = ID of the player who was the best bowler;
            8. bestFielder = ID of the player who was the best fielder;
            9. isCountry1Winner: if isDraw is false then this is compulsory to provide. either true or false.

    6. /player/performace: This is to enter details about a player's performance in a match
        request body:
            1. matchId = ID of the match;
            2. playerId = ID of the player;
            3. runScored = Runs scored by that player in that match;
            4. wicketTaken = Wickets taken by the player in that match;
            5. strikeRate = strikeRate of that player;