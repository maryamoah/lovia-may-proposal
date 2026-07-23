export const story = {
  names: { asker: 'May', beloved: 'Lovia', nickname: 'Mommie' },
  password: { primary: '19062026', backup: 'mommie' },
  musicPath: '/audio/sweet-lady.mp3',
  images: {
    password: '/images/photo1.jpg', hero: '/images/photo2.jpg', firstMessage: '/images/first-instagram-message.jpg', meeting: '/images/photo4.jpg', capeCoast: '/images/photo5.jpg', coteDIvoire: '/images/photo6.jpg', portrait: '/images/photo7.jpg', proposal: '/images/photo8.jpg', finale: '/images/photo9.jpg', photo: '/placeholders/photo-placeholder.svg', instagram: '/placeholders/instagram-message-placeholder.svg',
  },
  opening: ['Some people spend years looking for peace.', 'I found mine in you.', 'Hi, Mommie.'],
  firstMessage: { date: '14 April 2026', title: 'One message changed everything.', body: 'I texted you on Instagram without knowing where it would lead. What began as one message became beautiful conversations, comfort, laughter, and something that started to feel real.' },
  meeting: { date: '19 June 2026', lines: ['You were shy, but welcoming.', 'I wanted you to feel comfortable.', 'Somehow, everything just clicked.', 'Our first kiss felt magical.', 'I could not take my eyes off you.'] },
  timeline: [
    ['14 April 2026', 'Instagram message', 'The first small doorway into us.', '/images/photo3.jpg'],
    ['19 June 2026', 'First meeting', 'A shy welcome that felt like home.', '/images/photo4.jpg'],
    ['Beach', 'First kiss at the beach', 'The ocean kept quiet for our magic.', '/images/photo5.jpg'],
    ['Cape Coast', 'Cape Coast', 'A trip that made my heart certain.', '/images/photo5.jpg'],
    ['Côte d’Ivoire', 'Côte d’Ivoire', 'Two girls, zero French, infinite laughter.', '/images/photo6.jpg'],
    ['Kumasi', 'Kumasi', 'Another city, another reason to choose you.', '/images/photo7.jpg'],
    ['Tea Bar', 'Tea Bar', 'Soft conversations over something warm.', '/images/photo8.jpg'],
    ['Movie date', 'Movie date', 'Sitting close felt better than the film.', '/images/photo2.jpg'],
    ['Konongo', 'Konongo', 'Every place became ours because you were there.', '/images/photo9.jpg'],
  ].map(([date, title, caption, image]) => ({ date, title, caption, image })),
  qualities: ['Kind.', 'Beautiful.', 'Disciplined.', 'Respectful.', 'Ambitious.', 'Determined.', 'Generous.', 'Vulnerable.', 'Safe.', 'Home.'],
  letter: `My Mommie,\n\nI have never felt this much peace in love before. Loving you has been one of the calmest and most reassuring feelings I have ever experienced. Being in your arms feels safe, and your love never leaves me questioning your intentions with me.\n\nThis is the kind of love I have been searching for, and with you, I believe my search is over. I want to wake up to your gorgeous, puffy eyes and kiss your forehead. I want to sit with you through the hard days, laugh with you on the good ones, and cheer for every win coming your way.\n\nI want to cry with you, learn with you and from you, and become better for you and for the life we could build together. I want to come home and tell you everything about my day—the good, the bad, and every random detail in between.\n\nI want to discover life with you. I want us to walk side by side. I want to disturb you with my long conversations, play with you, and keep being childish around you. I hope we never lose the friendship, honesty, and comfort we have found in each other.\n\nEven on difficult days, I hope we choose each other, love each other, and still like each other. I hope we remain committed, stay true to what we feel, and realise our dreams together.\n\nAlways yours,\nMay`,
  proposal: ['Lovia…', 'I cannot imagine a better love story than ours.', 'Will you walk this journey of discovery with me…', 'and officially be my girlfriend?'],
  yes: ['Officially my girlfriend.', 'May + Lovia', 'Forever starts with choosing each other today.'],
};
export type TimelineEvent = (typeof story.timeline)[number];
