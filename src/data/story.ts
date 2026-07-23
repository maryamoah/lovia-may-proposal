export type StoryImageRole =
  | 'firstMessageScreenshot'
  | 'firstMeeting'
  | 'capeCoast'
  | 'portrait'
  | 'proposal'
  | 'celebration';

export type StoryImageMap = Partial<Record<StoryImageRole, string>>;

export type Memory = {
  eyebrow: string;
  title: string;
  caption: string;
  image?: StoryImageRole;
};

export type Quality = {
  title: string;
  text: string;
};

export const story = {
  names: { asker: 'May', beloved: 'Lovia', nickname: 'Mommie' },
  passwords: ['19062026', '190626', 'mommie'],
  musicPath: '/audio/sweet-lady.mp3',
  images: {
    firstMessageScreenshot: '/images/first-instagram-message.jpg',
    firstMeeting: '/images/first-meeting.jpg',
    capeCoast: '/images/cape-coast.jpg',
    portrait: '/images/lovia-portrait.jpg',
    proposal: '/images/proposal.jpg',
    celebration: '/images/celebration.jpg',
  } satisfies StoryImageMap,
  opening: {
    eyebrow: 'May · Lovia',
    heading: 'I have a question for you, Mommie…',
    supporting: 'But first, let me remind you how we got here.',
  },
  beginning: {
    heading: 'From one message to something real.',
    body:
      'I texted you on Instagram on 14 April 2026 without knowing where it would lead. By the time we finally met on 19 June, the conversations already felt easy. You were shy but welcoming, and after our first kiss, I could not take my eyes off you.',
  },
  memories: [
    {
      eyebrow: '14 April 2026',
      title: 'The first message',
      caption: 'One small doorway into us, opened by a message I am still grateful I sent.',
    },
    {
      eyebrow: '19 June 2026',
      title: 'The day we finally met',
      caption: 'A shy welcome, easy conversation, and the feeling that something real had arrived.',
      image: 'firstMeeting',
    },
    {
      eyebrow: 'Cape Coast',
      title: 'Where I knew for certain',
      caption:
        'I loved how I felt with you through the journey, the waakye, the hotel and the quiet time together. That was when I knew I had found my person.',
      image: 'capeCoast',
    },
    {
      eyebrow: 'Côte d’Ivoire and the ordinary adventures',
      title: 'Attiéké, road trips, movie dates, Tea Bar and Konongo',
      caption:
        'Two girls, zero French and one mission: attiéké. Somehow, we found food and another memory we still laugh about.',
      image: 'portrait',
    },
  ] satisfies Memory[],
  whyYou: {
    heading: 'She feels like home.',
    supporting: 'You make me feel safe enough to be myself and inspired enough to become better.',
    qualities: [
      { title: 'Kind', text: 'The first thing people notice, and one of the things I love most.' },
      { title: 'Beautiful', text: 'Inside and out. I still catch myself staring.' },
      { title: 'She stays', text: 'You said you would be there through the difficult parts, and you were.' },
      { title: 'Ambitious', text: 'Disciplined, driven and determined without losing your softness.' },
      { title: 'Loving', text: 'You are honest and vocal about how you feel. You never leave me guessing.' },
      { title: 'Safe', text: 'With you, I can be vulnerable, honest and fully myself.' },
    ] satisfies Quality[],
  },
  letter: `My Mommie,

I have never felt this much peace in love before. Loving you has been one of the calmest and most reassuring feelings I have ever experienced. Being in your arms feels safe, and your love never leaves me questioning your intentions with me.

This is the kind of love I have been searching for, and with you, I believe my search is over. I want to wake up to your gorgeous, puffy eyes and kiss your forehead. I want to sit with you through the hard days, laugh with you on the good ones, and cheer for every win coming your way.

I want to cry with you, learn with you and from you, and become better for you and for the life we could build together. I want to come home and tell you everything about my day—the good, the bad, and every random detail in between.

I want to discover life with you. I want us to walk side by side. I want to disturb you with my long conversations, play with you, and keep being childish around you. I hope we never lose the friendship, honesty, and comfort we have found in each other.

Even on difficult days, I hope we choose each other, love each other, and still like each other. I hope we remain committed, stay true to what we feel, and realise our dreams together.

Always yours,
May`,
  proposal: {
    eyebrow: 'The question',
    heading: 'I cannot imagine a better love story than ours.',
    question: 'Will you walk this journey of discovery with me, Mommie—and officially be my girlfriend?',
    softResponses: ['Nice try, Mommie.', 'You already know my favourite answer.'],
  },
  yes: {
    heading: 'She said yes.',
    lines: ['Officially my girlfriend.', 'May + Lovia', 'Forever starts with choosing each other today.'],
  },
};
