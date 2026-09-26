import heroCrew from './hero_aikya_crew_1790455829136.jpg';
import dancerSolo from './dancer_solo_freeze_1790455840669.jpg';
import verticalPoster from './aikya_vertical_poster_1790455851858.jpg';
import danceCypher from './aikya_dance_cypher_1790455863768.jpg';

export interface AuditionMedia {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  aspect: 'landscape' | 'portrait';
  src: string;
}

export const AUDITION_MEDIA: AuditionMedia[] = [
  {
    id: 'crew',
    title: 'The AIKYA Crew',
    subtitle: 'Unified Power Formation',
    tagline: 'Different Stories · Same Stage · Move as One',
    aspect: 'landscape',
    src: heroCrew,
  },
  {
    id: 'solo',
    title: 'Power Freeze',
    subtitle: 'Individual Expression & Mastery',
    tagline: 'Raw energy, control, and musicality',
    aspect: 'portrait',
    src: dancerSolo,
  },
  {
    id: 'poster',
    title: 'Auditions 2026 Poster',
    subtitle: '合一 · Move in Silence',
    tagline: 'More than a team, a movement',
    aspect: 'portrait',
    src: verticalPoster,
  },
  {
    id: 'cypher',
    title: 'The Cypher Battle',
    subtitle: 'Underground Street Spirit',
    tagline: 'Step into the circle and claim your moment',
    aspect: 'landscape',
    src: danceCypher,
  },
];

export { heroCrew, dancerSolo, verticalPoster, danceCypher };
