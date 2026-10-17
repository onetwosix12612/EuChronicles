Хроники Европы: сборка приложения

АНДРОИД (APK), без установки чего-либо на компьютер:
1. Создайте на github.com пустой репозиторий и загрузите в него всё содержимое этой папки
   (включая скрытую папку .github).
2. Откройте вкладку Actions, запустите «Build Android APK» (Run workflow).
3. Через пару минут скачайте файл chronicles-europe-apk (внутри app-debug.apk).
4. Передайте apk на телефон и откройте его (разрешите установку из неизвестных источников).

АНДРОИД локально: нужны Node 20, JDK 17, Android Studio.
   npm install d3@7.9.0 && npm install && node prep.js && npx cap add android && npx cap sync android && npx cap open android

iOS: собрать можно только на Mac с Xcode и аккаунтом Apple Developer:
   npm install d3@7.9.0 && npm install && node prep.js && npx cap add ios && npx cap sync ios && npx cap open ios
Проще для iPhone: откройте игру в Safari, «Поделиться» → «На экран Домой».
