<br />
<div align="center">
  <a href="https://github.com/DaniilZotin/auto-test-system">
    <img src="read-me-images/logo.png" alt="Logo" width="200" height="100">
  </a>

<h3 align="center" >Automation test system</h3>
</div>

## Вступ
Привіт, тут ти побачиш короткий туторіал як можна інтегрувати автоматизоване тестування з мінімальними зусилями на платформу DiiaEngine

## Коротко стосовно проекту
Це тільки шаблон застосунку для того щоб було розуміння підходить це під наші цілі чи ні. Тобто цей код націлений продемонструвати можливості створення автоматизованих тестів, і якщо ми зрозуміємо що це нам підходить, до можна створювати набагато складніші тести.


## Технології які використано

### Front-end:
* [![TS][TS]][TS-url]
* [![HTML][HTML]][HTML-url]
* [![CSS][CSS]][CSS-url]

### А також $\color{#55AE5B}{{PlayWrite}}$ - це ліба яка дозволяє емулювати дію браузеру в різних режимах. За допомогою неї ми і робимо тестування 

## Встановлення
1. git clone https://github.com/DaniilZotin/auto-test-system.git
2. npx playwright install
3. npm install
4. створити папку tests/fixtures
5. додати в папку fixtures два ключі з назвами Key-6dubravacitizen.dat та Key-6sidorenkoofficer 6 РА.dat

## Запуск
- npx playwright test --ui за допмогою цієї команди ми запускає тести в дуже зручному UI режимі, в якому можемо дивитись в real time куди клікає програма під час тестування сайту
<img width="1581" height="872" alt="image" src="https://github.com/user-attachments/assets/a96da09f-eb0c-49a0-a7c0-1d13a3038ad6" />

- також можна запустити в режимі codegen де код буде для тесту писатись автоматично коли ми клацаємо по сайту
<img width="1892" height="999" alt="image" src="https://github.com/user-attachments/assets/f5abea9f-444f-4d72-b654-0cd100330e1c" />



























[TS]: https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TS-url]: https://www.typescriptlang.org/

[HTML]: https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=HTML5&logoColor=white
[HTML-url]: https://developer.mozilla.org/en-US/docs/Web/HTML

[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white
[CSS-url]: https://devdocs.io/css/
