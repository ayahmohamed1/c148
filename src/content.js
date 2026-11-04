// ★ EDIT THIS FILE ONLY ★

const content = {
  // --- Background music ---
  // Put your .mp3 file in public/music/ and set the filename here
  // Set to null to hide the music button
  music: '/music/music.mp3',

  // --- Secret Date / Password Protection ---
  password: {
    code: '2535',
    title: 'enter a secret date',
    subtitle: 'a date only we know ♡',
    buttonText: 'UNLOCK ♡',
    errorMessages: [
      'no try again',
      'no try again',
    ],
    sticker: '/images/spiderman-hanging.png',
  },

  welcome: {
    greeting: 'hello ',
    name: 'my love',
    question: 'would you like to open your gift?',
    yesButton: 'YES PLEASE',
    noButton: 'NO THANKS',
  },

  noThanks: {
    message: "i promise you'll like it",
    tryAgainButton: 'TRY AGAIN',
  },

  menu: {
    title: 'pick a gift',
    subtitle: 'choose one to open ↓',
    items: [
      { id: 'memories', icon: '📸', sticker: '/images/spiderman-camera.png', label: 'Captured\nMemories' },
      { id: 'flowers', icon: '🌷', sticker: '/images/spiderman-flowers.png', label: 'Virtual\nFlowers' },
      { id: 'song', icon: '🎵', sticker: '/images/spiderman-music.png', label: 'our\nsong' },
      { id: 'letter', icon: '💌', sticker: '/images/spiderman-crouch-heart.png', label: 'Love\nLetter' },
    ],
  },

  memories: {
    title: 'our memories',
    returnButton: 'RETURN',
    images: [
      { src: '/images/memory1.jpg', label: '❤️', tag: 'my fav' },
      { src: '/images/memory2.jpg', label: '❤️', tag: 'cute' },
      { src: '/images/memory3.jpg', label: '❤️', tag: 'forever' },
    ],
  },

  flowers: {
    title: 'for you',
    returnButton: 'RETURN',
    flowerName: 'TULIP',
    flowerSubtitle: 'just like you — rare & beautiful',
    poems: [
      "You're my favorite person forever",
      "You're my safe place.",
      "Your smile is my favorite view.",
      "Every day with you is a beautiful day.",
      'Quiero ser tuya para siempre.',
      "I'm so lucky to have you.",
      'Mi mundo es solo tuyo',
      'Eres todo en mi vida',
      'Te amo, mi vida',
      'Eres la casualidad más hermosa de mi vida.',
    ],
  },

  song: {
    title: 'our song',
    returnButton: 'RETURN',
    // Put your .mp3 in public/music/ and update this path:
    audioSrc: '/music/music.mp3',
    remindsText: 'this song always makes me think of you',
    songTitle: 'our song',
    artist: 'for you 🎵',
    highlight: 'every lyric feels like us 💕',
  },

  letter: {
    title: 'a letter',
    returnButton: 'RETURN',
    message: `كل سنة وانتي طيبة يا يوييي يا حياتي، وربنا ميبعدكيش عني يا رب. 🩷

أنا مش عارفة أقول إيه، بس بجد انتي أحلى وأغلى حاجة في حياتي، ومن غيرك عمري ما هبقى كويسة أبدًا، لأن أنا بقيت كويسة بسببك.

لو في إيدي أتمنى حاجة بجد، بتمنى إني مبعدش عنك أبدًا مهما حصل، وتفضلي معايا طول العمر إن شاء الله.

وهتمنى إنك تبقي دايمًا كويسة وبخير، وربنا يحققلك كل اللي انتي بتتمنيه، ومتتوجعيش أبدًا.

مش عارفة أقولك إيه صراحة، بس بجد أنا بحبك جدًا يا حياتي. 🩷

Feliz cumpleaños, mi pecado. 💋🩷`,
    signoff: 'I love you always,',
    signature: 'Your love ♡',
  },
}

export default content
