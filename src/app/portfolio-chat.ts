import { Component, signal } from '@angular/core';

type ChatMessage = {
  sender: 'bot' | 'visitor';
  text: string;
};

@Component({
  selector: 'app-portfolio-chat',
  templateUrl: './portfolio-chat.html',
  styleUrl: './portfolio-chat.css'
})
export class PortfolioChatComponent {
  protected readonly draft = signal('');
  protected readonly messages = signal<ChatMessage[]>([
    { sender: 'bot', text: "Hi! I'm Kim's portfolio assistant. Ask me about Kim's experience, skills, education, or how to get in touch." }
  ]);

  protected readonly suggestions = [
    'What experience does Kim have?',
    'Which technologies does Kim use?',
    'What projects has Kim worked on?',
    "What are Kim's salary expectations?",
    'How can I contact Kim?'
  ];

  protected send(event?: Event): void {
    event?.preventDefault();
    this.ask(this.draft());
  }

  protected ask(question: string): void {
    const text = question.trim();
    if (!text) return;

    this.messages.update((messages) => [
      ...messages,
      { sender: 'visitor', text },
      { sender: 'bot', text: this.getAnswer(text) }
    ]);
    this.draft.set('');
  }

  private getAnswer(question: string): string {
    const normalized = question.toLowerCase();

    if (/salary|compensation|pay/.test(normalized)) {
      return 'Kim is open to discussing compensation based on the role, responsibilities, and overall package. Please contact Kim to discuss details.';
    }
    if (/contact|email|reach/.test(normalized)) {
      return 'You can contact Kim at flores.kim.4859@gmail.com.';
    }
    if (/project|portfolio work/.test(normalized)) {
      return "Kim's portfolio currently highlights work across web experiences, product design, and data and systems. More project details will be added as they become available.";
    }
    if (/education|degree|school|university|study/.test(normalized)) {
      return 'Kim earned a Bachelor of Science in Information Technology, majoring in Web and Mobile Development, from Bulacan State University in June 2024.';
    }
    if (/skill|technology|technologies|tools|stack|programming/.test(normalized)) {
      return 'Kim works with Angular, TypeScript, HTML and CSS, .NET C#, PostgreSQL, Azure DevOps, AWS Lambda, UI/UX, GitHub Copilot, and Agile practices.';
    }
    if (/experience|career|role|work|accenture|job/.test(normalized)) {
      return 'Kim has worked at Accenture Philippines as an Intern, Associate Software Engineer, and Package App Analyst. The work includes Angular and .NET C# applications, backend APIs, PostgreSQL, AWS Lambda, testing and debugging, and Azure DevOps.';
    }
    if (/about|who is|kim/.test(normalized)) {
      return 'Kim Flores is an Angular developer and analyst who enjoys turning complex problems into clear, useful digital experiences.';
    }

    return "I don't have that detail yet. You can explore the portfolio or contact Kim at flores.kim.4859@gmail.com.";
  }
}