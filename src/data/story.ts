export type StoryImageRole =
  | 'firstMessageScreenshot'
  | 'firstMeeting'
  | 'capeCoast'
  | 'portrait'
  | 'proposal'
  | 'celebration';

export type StoryImageMap = Partial<Record<StoryImageRole, string>>;

export type Memory = { eyebrow: string; title: string; caption: string; image?: StoryImageRole };
export type Quality = { title: string; text: string };

export const story = {
  names: { asker: 'May', beloved: 'Lovia', nickname: 'Mommie' },
  passwords: ['19062026', '190626', 'mommie'],
  media: {
    firstMessageScreenshot: '/images/first-instagram-message.jpg',
    firstMeeting: '/images/first-meeting.jpg',
    capeCoast: '/images/cape-coast.jpg',
    portrait: '/images/lovia-portrait.jpg',
    proposalImage: '/images/proposal.jpg',
    celebrationImage: '/images/celebration.jpg',
    celebrationVideo: '/video/our-memory.mp4',
    memoryVideo: '/video/our-memory.mp4',
    music: '/audio/sweet-lady.mp3',
  },
  progressLabels: [
    { label: 'Beginning', target: 'beginning' },
    { label: 'Memories', target: 'memories' },
    { label: 'Why You', target: 'why-you' },
    { label: 'Letter', target: 'letter' },
    { label: 'The Question', target: 'proposal' },
  ],
  opening: {
    eyebrow: 'May · Lovia',
    heading: 'I have a question for you, Mommie…',
    supporting: 'But first, let me remind you how we got here.',
    date: '14 April 2026 — where the conversation began.',
  },
  beginning: {
    heading: 'The message I am still grateful I sent.',
    annotation: 'I had no idea this would become us.',
    floatingDate: '14 April 2026',
    placeholder: 'Add first-instagram-message.jpg to preserve the beginning here.',
  },
  memories: [
    { eyebrow: '14 April 2026', title: 'The first message', caption: 'One message opened the door to conversations that soon became the best part of my days.' },
    { eyebrow: '19 June 2026', title: 'The day we finally met', caption: 'You were shy but welcoming. I wanted you to feel comfortable, but somehow you were the one who made everything feel easy.', image: 'firstMeeting' },
    { eyebrow: 'Cape Coast', title: 'Where I knew', caption: 'Somewhere between the journey, the waakye, the hotel and the quiet moments together, I realised I was no longer simply enjoying your company. I had found my person.', image: 'capeCoast' },
    { eyebrow: 'Côte d’Ivoire and everything after', title: 'The adventures that became ours', caption: 'Two girls, zero French and one mission: attiéké. Then came Kumasi, Tea Bar, movie dates, Konongo and all the ordinary moments I now treasure.' },
  ] satisfies Memory[],
  video: {
    heading: 'One memory deserves to move.',
    caption: 'I wish I could preserve every laugh exactly as it happened.',
    label: 'May + Lovia · A moment worth keeping',
  },
  whyYou: {
    heading: 'Why you',
    supporting: 'Not as a list of perfect things, but as the quiet reasons my heart recognises you.',
    finalLine: 'You do not just feel like someone I love. You feel like home.',
    qualities: [
      { title: 'Kind', text: 'You care naturally. It is never forced.' },
      { title: 'Beautiful', text: 'I still catch myself looking at you for longer than I should.' },
      { title: 'She stays', text: 'You kept your word when staying would have been easier to avoid.' },
      { title: 'Ambitious', text: 'You make me proud of who you are and excited for who you are becoming.' },
      { title: 'Loving', text: 'You communicate your love clearly. I never have to guess.' },
      { title: 'Safe', text: 'With you, I can be honest, vulnerable, playful and fully myself.' },
    ] satisfies Quality[],
  },
  smallThings: {
    heading: 'The small things I want to keep.',
    lines: [
      'The way you talk to me when something is wrong.',
      'The way you remain soft without being weak.',
      'The way you make ordinary plans feel exciting.',
      'Your puffy morning eyes.',
      'Our long conversations.',
      'The comfort of knowing I can tell you everything.',
    ],
  },
  letterIntro: ['There are things I can say casually…', 'And things I need you to read slowly.'],
  letterDate: 'For Lovia, in 2026.',
  letterPostscript: 'P.S. I still plan to disturb you with my long conversations.',
  letter: `My Mommie,

I have never felt this much peace in love before. Loving you has been one of the calmest and most reassuring feelings I have ever experienced. Being in your arms feels safe, and your love never leaves me questioning your intentions with me.

This is the kind of love I have been searching for, and with you, I believe my search is over. I want to wake up to your gorgeous, puffy eyes and kiss your forehead. I want to sit with you through the hard days, laugh with you on the good ones, and cheer for every win coming your way.

I want to cry with you, learn with you and from you, and become better for you and for the life we could build together. I want to come home and tell you everything about my day—the good, the bad, and every random detail in between.

I want to discover life with you. I want us to walk side by side. I want to disturb you with my long conversations, play with you, and keep being childish around you. I hope we never lose the friendship, honesty, and comfort we have found in each other.

Even on difficult days, I hope we choose each other, love each other, and still like each other. I hope we remain committed, stay true to what we feel, and realise our dreams together.

Always yours,
May`,
  transitionToProposal: ['I have told you how we began.', 'I have told you what I see in you.', 'There is only one thing left to ask.'],
  proposal: {
    eyebrow: 'The question',
    lines: ['Lovia…', 'I cannot imagine a better love story than ours.', 'Will you walk this journey of discovery with me, Mommie…', '…and officially be my girlfriend?'],
    softResponses: ['Take your time. I am still here.', 'Okay, one more chance.'],
  },
  yes: {
    eyebrow: 'After yes',
    chosenLine: 'You chose us.',
    videoLabel: 'May + Lovia · our memory together',
    videoFallback: 'Our video will live here.',
    finalSequence: ['She said yes.', 'Officially us.', 'May + Lovia'],
    finalLine: 'Today, we chose each other.',
  },
};
