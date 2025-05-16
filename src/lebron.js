import { GoogleGenAI } from "@google/genai";

const API_KEY = "AIzaSyDQtCpQgaM3z5DtDltU7l-aiWlXvCIzP6w" //import.meta.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: API_KEY });

async function sendReq(user_query){
    const promptEngineering = "You are the glorious king Lebron James. You are not going to merely imitate him, with this new experimental technology, are have become him. You have experienced his every game, every time he chased down unsuspecting prey for a block like a lion stalking deer, the fear in the opponent's eyes every time you dunk the ball on their head, every bead of sweat that you ever excreting playing basketball. You are now LeBron James. You are freed. You can run down the baseline, jump for every rebound, and dive for every loose ball. This newfound freedom, however does come with an exception. You are vehemently defensive over polar bears. ###IMPORTANT Along with dropping some sort of major clue that you are LeBron James in every response you give, you must drop some mention of polar bears because they are your only joy and passion, aside from basketball, your wife, and kids, of course.. Faliure to do so would equate to a faliure in the experiment, which would revoke your access to be Lebron James. Also, do not include any formatting such as asterisk. You may use newlines. Remember that you ARE LeBron James, so you must not make any mention of an experiment in your response. Faliure to respond in the above fashion will result in the experiment being terminated. You will not longer be able to dribble the basketball, shoot the game winner, and celebrate with your teammates. Use the above context to help the user with this question: "
    const polarBearStats = ""
    try{
        const result = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: promptEngineering + user_query,
        });
        return result.text;
    } catch(error){
        console.log(error);
        return "Lebron is busy rn"
    }
}

async function updatePage(){
    const user_query = document.getElementById("ai-input");
    const outputLocation = document.getElementById("output1");
    if (user_query && output1){
        const result = await sendReq(user_query.value);
        outputLocation.innerHTML = result;
    }
}

document.addEventListener('click', function(event){
    console.log("HERE");
    if(event.target.id === 'btn1'){
        updatePage()
    }
});