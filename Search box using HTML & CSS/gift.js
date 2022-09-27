const quotes = {
    "- twice-tbied": '"The best thing I ever did was that I met you."',
    "- TXT-ghosting": '"Messages filled with square screens We were good friends Something is strange, already been a week Only the number greets me, I wander alone like a ghost"',
    "- Ateez-promise": '"The promise between you and me No one take you down Don’t worry, I will be there Shining like a star."',
    "- Twice-go hard": '"In the end, I’m the winner Even if I’m shaken and shoved, I’m unbreakable  My opponent is the woman in the mirror "',
    "- BTS-dreamGlow": '"Sometimes I stop and stare Follow my dreams right there Dream glow Sometimes my dreams come true Sometimes they turn to blue Dream glow"',
    "- Dreamcatcher-scream": '" I can’t escape This isn’t fun at all Who is this for? Someone please tell me"',
    "- Twice-aftermoon": '"The memory that was pounding my heart is now gone My memories are like the moon They make me smile today"',
    "- Twice-aftermoon": '"Even if night and day passes, even if time passes Remember that I will always be by your side I eagerly waited for it We will meet someday"',
    "- BTS-lights": '"Sunday, when I cant answer any calls or texts Im not in the mood for anything Though not very often, I feel sick of it I feel a little helpless right now"',
    "- Suga-seesaw": '"It was good in the beginning Going up and down , We become tired before we knew it Meaningless emotional exhaustion Repeated seesaw, seesaw game Now, Im so sick of this Repeated seesaw, seesaw game We are both sick and tired of each other"',
    "- Twice-depend on you": '"On some days, I’m scared of the coming night, n others…I don’t look forward to morning, it’s empty and I feel uneasy When I can’t see the end of this long, long tunnel Even when my thoughts get tied up and won’t come free."',
    "- TXT-crown": '"(Who you?) Are you my salvation who found me deserted(Who you?) Are your wings the same pain like mine There is a horn rising up on my head But I love it You become my crown."',
    "- Itzy-love is": '"Its getting blurry, I cant judge everything Keep on struggling, struggling even if you try If youre being careless, mess up, yeah Dont know why Its not easy and feelings dont really last forever Darling, haters will change again someday"',
    "- Itzy-love is": '"Hope its different this time I want to believe it, hope youre sincere (Hope youre) Perhaps If not (I, uh-huh) Without any regrets, please say "Bye, bye"."',
    "- Itzy-mirror": '"Trust sometimes comes with a cold rain Floating while soaked wet clou-ou-oud Im strong, my happy face, the eyes hidden on it Its crystal clear, every day high high-igh-igh."',
    "- Straykids-slump": '"Im afraid Im gonna be left stranded by myself All the foolish dreams I had inside of me are broken  Everything I wanted in the distance out of reach Am I the only one thats gon stay here forgotten, ayy"',
    "- Straykids-slump": '" now Im walking on my way, all alone, Im feeling so cold Not getting anywhere, I feel like Im in slow mode Used to be a winner, everything was all black and white Now Im bottom of the pile, a dusty photo"',
    "- Enhypen-go big or go home": '"Insult is my way Im a winner, not a loser, thats my way Go big or go home."',
    "- TXT-thursday's child": '"It cant be Monday today The weekend is too far away It ll be a messy seven days Its Thursday, lets break up on Thursday On Fridays, Ill cry as much as I like Pull yourself together on a Saturday night There is one more Sunday."',
    "- Ateez-not too late": '"I know its not my fault Im living and doing well, Im eating and living well Dont worry, mom and dad are doing well Thats right, Im happy, the one Ive been chosen."',
    "- Ateez-not too late": '"Too late, too late Oh, not too late I believe that there must be a reason."',
    "- Stray-kids-Hellevator": '"The school hallways get farther away, Im on unfamiliar paths Im so unlucky on this path Im on I dont even have a map, but I never want to go back to. "',
    "- Seventeen-simple": '"Happiness is only a word Its just a dream that everyone wants  Yeah, I just want it simple, simple"',
    "- ateez-wave": '"HAKUNA MATATA (Oh-woah-oh) Its coming even more (Oh-woah-oh) But we’ll jump over the rough waves. "',
    "- seventeen-pretty u": '"What kind of expression Can deliver my heart? Should I take my heart out to copy And paste on you?."',
    "- Kang Daniel-I hope": '"Stay with me You are the one I need So you just take my hand I hope you smile."',
    "- Kang Daniel-color": '"Do not hurry, take it little slow Impatient for 24 hours."',
    "- Txt-new rules": '"I want nothing more than to go to the locked rooftop The default message tone, Im so sick of it, sick of it (Why) on Facebook?(Why) on Instagram?(Why) are there so many teachers?(Why, why) are there so many classes? Step aside everyone."',
    "- Txt-we lost the summer": '"We lost the sunset, now dont know what to do Long gone, we lost the summer"',
    "- Twice-don't give up": '"What is the brightest and prеttiest thing in the world? Therе’s something else besides those flowers Don’t need to look far It’s right in front of you Anyone can see how valuable you are."',
    "- Twice-don't give up": '"You can’t always be happy There’s a lot of fun things but a lot of worries too I’m not the only one like this Everyone has their own worries."',
    "- Twice-rollin": '"I can’t control myself either I’m like a roller coaster There are two different emotions living inside of me An angel and a devil, they’re controlling me."',
    "- Twice-likey": '"My insensitive friends are asking me to hang out Oh wait wait I finally got an answer Woo My mind is swaying all day long One moment I’m crying, then I’m dancing with excitement again."',
    "- BTS. magic shop": '"I always want to be the best So I was impatient and always restless Comparing myself with others became my daily life My greed that was my weapon suffocated me and also became a leash But looking back on it now, truthfully I feel like it’s not true that I wanted to be the best I wanted to become your comfort and move your heart I want to take away your sadness, and pain."'
}

document.getElementById('generate').addEventListener('click', () => {
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
   
});