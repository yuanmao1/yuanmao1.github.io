import { zh, type SiteContent } from './zh';
import { en } from './en';

export type { SiteContent };

export function getContent(lang: 'zh' | 'en'): SiteContent {
  return lang === 'en' ? en : zh;
}
