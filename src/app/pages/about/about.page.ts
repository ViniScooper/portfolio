import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, effect, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import { TraktTvService } from '@core/services/trakt-tv.service';
import profileData from '@data/profile.data';
import { Music } from '@shared/components/music/music'
import { Watch } from '@shared/components/watch/watch'

@Component({
  selector: 'about',
  template: `
  <section class="flex flex-col max-w-screen-lg justify-between mx-auto gap-16 dark:text-gray-200 overflow-y-hidden">
    <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">About Me</h1>
      <p class="justify-start">I'm Vinicius Lourenço, a software engineer with over five years of experience. I specialize in turning ideas into polished software, blending innovation with user-friendly design. 🚀</p>
      <p class="justify-start">Currently, I work as a Database Administrator (DBA), managing and maintaining database systems to ensure their performance, security, and reliability. I am passionate about optimizing database operations and providing efficient data solutions.</p>
    </div>
    <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">Activity:</h1>
      <!-- Adicione aqui as atividades -->
    </div>
    <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">Contact Information:</h1>
      <p><b class="dark:text-white text-black">Address:</b><br />Brazil</p>
      <p><b class="dark:text-white text-black">Mobile Number:</b><br />+81995126839</p>
      <p><b class="dark:text-white text-black">Email:</b><br /><a href="mailto:vviniciuslourenco@gmail.com">vviniciuslourenco&#64;gmail.com</a></p>
    </div>
  </section>
  `,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgFor, Music, Watch]
})
export class AboutPage {
  // Removido aboutDetails
}
