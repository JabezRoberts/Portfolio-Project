let motivationalMessages = [`“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein`, `“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi`, `“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain`, `“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt`, `“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale`, `“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson`, `“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”—Diane McLaren`, `"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill`, `"It is better to fail in originality than to succeed in imitation." — Herman Melville`, `"The road to success and the road to failure are almost exactly the same." — Colin R. Davis`, `“Success usually comes to those who are too busy looking for it.” — Henry David Thoreau`];


let inspirationalMessages = [`“When you have a dream, you’ve got to grab it and never let go.” — Carol Burnett`, `“Nothing is impossible. The word itself says ‘I’m possible!'” — Audrey Hepburn`, `“There is nothing impossible to they who will try.” — Alexander the Great`, `“The bad news is time flies. The good news is you’re the pilot.” — Michael Altshuler`, `“Life has got all those twists and turns. You’ve got to hold on tight and off you go.” — Nicole Kidman`, `“Keep your face always toward the sunshine, and shadows will fall behind you.” — Walt Whitman`, `“Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.” — Amal Clooney`, `“You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.” — Duchess Meghan`, `“Success is not final, failure is not fatal: it is the courage to continue that counts.” – Winston Churchill`, `“What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.” — Ralph Waldo Emerson`];


let romanticMessages = [`If loving you was a job, I'd be the most deserving, dedicated, and qualified candidate. In fact, I'd even be willing to work for free!`, `If someone asked me to describe you in just two words, I'd say "Simply Amazing."`, `You do a million little things that bring joy to my life`, `My six-word love story: "I can't imagine life without you."`, `Your smile is literally the cutest thing I've ever seen in my life.`, `Everyone has their own motivation to get up in the morning and face the day. You are mine.`, `You are my Knight in shining boxer shorts.`, `The only time I stupidly smile at my phone is when I get text messages from you.`, `What is love? It is what makes your cell phone ring every time I send text messages.`,`Can I borrow a kiss? I promise to give it back`, `You wanna know who I'm in love with? Read the first word again`];

//create a function that  takes in no arguments but does the following
/*
1. Generate three random numbers between 0 and 9
2. Use these three numbers to select an array position from the three arrays above
3. concatenate them to create a random message
4. Return this message
*/


mixedMessageGenerator = () => {
    
    let motivationPosition = Math.floor(Math.random() * 10); //genertate random number between 0 and 9
    let inspirationPosition = Math.floor(Math.random() * 10);
    let romanticPosition = Math.floor(Math.random() * 10);

// now use these nnumbers as array positions to return or prin ta message to the console with three random messages 

    console.log(`Your random motivation message is: ${motivationalMessages[motivationPosition]}. Let us keep you inspired with a random inspirational message "${inspirationalMessages[inspirationPosition]}. But always remember to cherish the people you love. Here's a romantic message to keep the fire burning: ${romanticMessages[romanticPosition]}`);

}


mixedMessageGenerator();