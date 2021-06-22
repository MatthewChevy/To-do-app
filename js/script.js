const button = document.getElementsByClassName('add-button'),
      deleteButton = document.getElementsByClassName('delete-button'),
      textBoxHTLM = document.getElementsByClassName('textbox'),
      getEvenetWrapper = document.getElementById('eventwrapper'),
      textBox = [].slice.call ( textBoxHTLM ),
      dltBtn = document.getElementsByClassName('dlt-btn-wrap')[0];
      
      //when click to '+', add new li element  
    // if textarea is empty, can't add new element
button[0].addEventListener('click', function(e){
 e.preventDefault();

    let input = document.getElementsByClassName('input');
     
        if ( !input[0].value == ''){
            
            const div = document.createElement('div'),
                eventWrapper = document.querySelector('#eventwrapper');
            
            eventWrapper.appendChild(div).classList.add('textbox');
            div.textContent += input[0].value; //Value from input
        
            textBox.push(div);

            dltBtn.style.display = 'block';
        };

    input[0].value = '';
});

deleteButton[0].addEventListener('click', function(){

    let answer = window.confirm( 'Are you sure you want to delete all events?');

    if (answer){
        for (var i = getEvenetWrapper.children.length - 1; i >= 0; --i) {
                getEvenetWrapper.children[i].remove();
                dltBtn.style.display = 'none';
            }; 
        };
    
});

document.body.onclick = function(){

    for (var i = 0; i < textBox.length; i++) {
        textBox[i].addEventListener('click', function(){
            if( this.classList.contains('line-trough')){

                this.classList.remove('line-trough'); 
            } else {
                this.classList.add('line-trough'); 
            }
        }); 
    };

};







 




