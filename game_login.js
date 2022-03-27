function add_user(){
    player1_name=document.getElementById("name_1_input").value;
    player2_name=document.getElementById("name_2_input").value;
    
    localStorage.setItem("player_1_name",player1_name);
    localStorage.setItem("player_2_name", player2_name);
    
    window.location="game_page.html";
}
// function addUser() { player1_name = document.getElementById("player1_name_input").value; player2_name = document.getElementById("player2_name_input").value; localStorage.setItem("player1_name", player1_name); localStorage.setItem("player2_name", player2_name); window.location = "game_page.html"; }