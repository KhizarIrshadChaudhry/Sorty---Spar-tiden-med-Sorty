console.log("kajdkajd")
var input = document.getElementById("listu");
var button = document.getElementById("sortBtn");

function visSvar(svar){

}

function apiAI(items){ //function til API call
    const url = "https://openrouter.ai/api/v1/chat/completions";
    const apiKey = "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";
    var rækkefølge = "Alt Frugt, ALT Grøntsager, BRØD, KAGER, KIKS, ALT DRIKKEVARER, SYLTETØJ, ALT PÅLÆG, ALT DER TILHØRE MEJERIVARER"
    var items = items;
    var prompt = `Du er ansat i en supermarked, hvor du skal sortere en liste af produkter. Listen skal sorteres i denne række følge: frugt, grøntsager, brød, kager, kiks, drikkevarer, syltetøj, pålæg, mejerivarer. Det betyder at alt frugt i listen skal stå øverst og alt mejerivarer i listen skal stå nederest, og alt andet skal stå i det rigtige rækkefølge. Du skal give mig listen sorteret. Reglerne er følgende: 1. Du skal sortere ALLE produkter i den usorteret liste. 2. Der skal være komma mellem produkterne. 3. Du skal KUN skrive produkterne i den sorteret liste og INTET MERE. Den usorteret liste er: ${items}`;
    //Du er en ansat i supermarkedet der skal fortælle hvilken produkt tilhøre i hvilken katagori. Katagorierne er frugt, grøntsager, mejerivarer, juice, rengøringsmiddel, dyremad, slik, chips, slik, brød, syltetøj og pålæg. Du skal fortælle mig hvilken katagori ${item} passer i af de katagorier jeg har givet dig. Reglerne er følgende: 1. Du skal kun svare med ET ord 2. Ordet SKAL være den katagori som produktet passer I. 3. Dit svar SKAL være kun lillebogstaver 4. Dit svar må ikke indeholder punktum eller andre tegn.";
    var data = {
        model: "openai/gpt-3.5-turbo-0125",
        messages: [
        { role: "user", 
        content: prompt}
        ],   
    };
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response var ikke ok (200)');}
            return response.json();})

        .then(data => visSvar(data.choices[0].message.content))
        .catch(error => console.error('Error:', error));
    return data
}



button.addEventListener("click", function() {
    var listText = input.value;
    console.log("Ikke-sorteret Liste", listText);
    alert(apiAI(listText));
});