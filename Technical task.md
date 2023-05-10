# Срок сдачи веб-приложения. 14 мая 2023г

## Глоссарий:

Спринт- это короткий временной интервал, в течение которого scrum-команда выполняет заданный объем работы. 

Тимлид - автор проекта.

Open - задача создана, но к её выполнению ещё не приступили.

Active - задача находится в процессе выполнения.

Resolved - задача выполнена.
 
## Цели и задачи создания веб-приложения 

1. Реализовать возможность регистрации пользователей и их авторизацию по E-mail и паролю.

2. Реализовать возможность создания, редактирования и просмотра задач за день и за спринт(система управления задачами). 
	

Веб-приложение будет полезно тем,кто ведет учет данных по задачам в таблицах или на листе бумаги. Присутствует возможность создания,назначения и ведения задач по каждому сотруднику.

Веб-приложение гарантирует сохранность данных и простой способ работы с большим объемом данных, а главное система прозрачна и маштабируема.

### Текущее положение:

На данный момент команде приходится работать с задачами посредством файлов EXCEL. 

Из-за отсутствия регистрации и авторизации пользователей нет возможности отстлеживать автора внесения изменений и просмотра полной истории работы по задачам.

Большая вероятность потери и утечке данных при обмене информацией,так как файлы могут случайно попасть к сторонним пользователям.

## Целевая аудитория:

Офисная команда состоящая из тимлида и сотрудников.

Веб-приложение рассчитано на команду не более 10 человек.

Иерархия сотрудников представляется следующим образом: 

![Схема](https://github.com/DibrovDru/Architecture.1/raw/dev_muratov/images/ierarhia.jfif)
 
## Модель работы в веб-приложении
### Вход в веб-приложение

![Схема](https://github.com/DibrovDru/Architecture.1/raw/dev_muratov/images/Enter.png)


### [Регистрация в веб-приложение](#страница-регистрации)

![Схема](https://github.com/DibrovDru/Architecture.1/raw/dev_muratov/images/Registration.png)

### [Авторизация в веб-приложение](#страница-авторизации)

![Схема](https://github.com/DibrovDru/Architecture.1/raw/dev_muratov/images/authorization.png)

## Работа в веб-приложение

### [Страница работы после авторизации](#страница-после-авторизации)

![Схема](https://github.com/DibrovDru/Architecture.1/raw/dev_muratov/images/PageAfterAuthorisation.png)

## [Работа с разделом Проекты](#раздел-проекты)

![Схема](https://github.com/DibrovDru/Architecture.1/raw/dev_muratov/images/WorkProjectPage.png)

### [Создание проекта](#создание-проекта)

![Схема](https://github.com/DibrovDru/Architecture.1/raw/dev_muratov/images/NewProject.png)


### [Работа с разделом Сотрудники](#раздел-сотрудники)



### [Работа с разделом Задачи](#раздел-задачи)



### [Работа с разделом Спринты](#раздел-спринты)



## Функциональные требования к веб-приложению:

### Страница Регистрации

На странице должна отображаться информация о регистрации с указанием следующих полей:

•	Как вас зовут?;

•	E-mail;

•	Пароль;

•	Повторите пароль.

А так же Согласие на обработку персональных данных,с возможностью отметки.

Необходимо **отобразить кнопку "Готово"** для успешного прохождения регистрации.

**Отобразить кнопку "Авторизация"**, для прохождения авторизации, в случае успешной регистрации или для возврата кнопку **"Назад"**.

### Страница Авторизации

На странице должна отображаться информация об авторизации с указанием следующих полей:

•	E-mail;

•	Пароль.

Необходимо **отобразить кнопку "Готово"** для успешного входа в систему.

**Отобразить кнопку "Регистрация"**, для прохождения регистрации, в случае необходимости.

### Страница после авторизации

При авторизации пользователя провести проверку на наличие проекта. 

Если у пользователя нет проекта то открывается страница с [созданием проекта.](#создание-проекта)

Если у пользователя проект уже есть открываем страницу с [выбором проекта.](#выбор-проекта)


### Основная страница

На главной странице должна отображаться следующая информация:

В верхней части должна быть отображена информация об наименовании проекта,с возможностью выбора интересующего проекта через выпадающий список. 

Так же необходимо **отобразить кнопку "Создать"** ,для возможности быстрого перехода к следующим разделам:

• Проект

• Задача

• Спринт

При выборе раздела-его название меняет цвет.

С левой стороны должны отображаться поля :

Проекты, Задачи, Сотрудники, Спринты, с возможностью перехода в соответствующий раздел. 


### Выбор проекта

Выбор осуществляется с помощью **кнопки "Выбрать проект"** в центральной части экрана. 

После нажатия **кнопки "Выбрать проект"** открывается список проектов, на котором можно выбрать необходимый с помощью **кнопки "Выбрать проект"** или создать новый  с помощью **кнопки "Создать проект".**

Так же выбрать проект можно с помощью **кнопки в верхней части страницы "Проекты"**.

Если на страницу не вмещаются все проекты пользователя,то должна быть реализована возможность пролистывания стрелками "право-лево".

Проекты должны быть отсортированы.

В первую очередь должны быть отображены проекты с последней датой(последний пришел,первый ушел)

После выбора проекты переход должен осуществляется в раздел "Проекты"

### Раздел Проекты

При открытии раздела отображаются следующие поля :

• Наименование

• Описание

Данные поля можно редактировать **с помощью "карандашика" в правом углу** у соответсвующего поля.

На странице списком отображены "Автор" и "Участники" проекта. Должно отображаться имя пользователя,вводимое при регистрации.

На странице должна быть реализована возможность *Создания проекта.* А так должен быть реализован поиск по проектам.

####  Создание проекта

Создание проекта разбито на несколько этапов:

На странице должна отображаться информация с указанием следующих полей:

1.Этап:

• Имя проекта (обязательное поле);

• Количество дней в спринте (поле является не обязательным для заполнения).

**Через "!" должна отображаться** справочная информация с объяснением, что такое спринт.

• Описание проекта (поле является не обязательным для заполнения).

Необходимо **отобразить кнопку "Назад"**, если пользователь передумал заводить проект и **отобразить кнопку "Далее"**,для перехода на 2 этап.

2 Этап:

• Добавить участников(поле является не обязательным для заполнения). 

Должны быть отображены E-mail выбранных участников, **добавление возможно через кнопку "+"**

*Функция "Добавить участников" должна быть реализована: открытием дополнительной страницы с полем: участники проекта.*

*В данном поле вводится E-mail добавляемого и далее остается отображенным.*

*Если необходимо удалить, то нужно* **нажать на кнопку "крест"** *в правом углу поля.*

*Для добавления следующего участника необходимо*   **отобразить кнопку "Участник +"**

*Для отмены операции*  **отобразить кнопку "Отмена".**

*Для сохранения страницы*  **отобразить кнопку "Готово"**

*Если поле "Добавить участников" не было заполнено, то пользователь не переходит на 3 этап, а создание проекта завершается и проект сохраняется.*

3.Этап:

На странице должна отображаться информация с указанием следующих полей:

•	Руководитель, с возможность выбора из выпадающего списка,должен отображаться E-mail выбранного;

•       Подчиненные, с возможность выбора из выпадающего списка,должен отображаться E-mail выбранного.

*Требуется реализовать возможность добавления нескольких подчиненных к одному руководителю,* **отобразить кнопку "Подчиненный +",**  *для добавления дополнительного подчиненного.*

*Необходимо* **отобразить кнопку "Новая связь"** *, для добавления дополнительной связи руководитель-подчиненный.*

• Комментарий(поле является не обязательным для заполнения). 

Необходимо **отобразить кнопки "Назад" и "Готово"**. После нажатия кнопки "Готово" проект сохраняется в системе.

### Раздел Сотрудники

При открытии раздела отображается страница со следующими параметрами:

• Иерархия, **с кнопкой в виде карандашика** для редактирования связей.

Ниже расположено отображение иерархии в формате руководитель-подчиненный.

• Комментарий(поле является не обязательным для заполнения). 

• *Кнопка показать диаграмму*. Должна быть показана картинка с иерархией проекта.

В разделе должна быть информация об авторе и участниках проекта, с возможностью добавления **через кнопку "Добавить"**.

При нажатии на **кнопку "Добавить"** открывается дополнительная страница с указанием всех участников проекта. 

Внести дополнительного участника можно с помощью **кнопки "Участник +".** 

По окончанию редактирования,для сохранения результатов реализовать возможность нажатия **кнопки "Готово"**, при отказе от внесения изменений **кнопку "Назад"**.

После нажатия  **кнопки "Готово"** открывается страница с добавлением связей. 

*Требуется реализовать возможность добавления нескольких подчиненных к одному руководителю,* **отобразить кнопку "Подчиненный +",**  *для добавления дополнительного подчиненного.*

*Необходимо* **отобразить кнопку "Новая связь"** *, для добавления дополнительной связи руководитель-подчиненный.*

Должно быть реализованно поле "Комментарий" для добавления пояснений к орг.структуре. 

*Необходимо* **отобразить кнопку "Сохранить"** *, для сохранения изменений, при отказе от внесения изменений **кнопку "Назад"**.*

Если редактор забыл указать связь, добавленные сотрудники без связи автоматически привязываются к автору проекта.

При нажатиии **кнопки в виде карандашика** рядом с Иерархией открываютя поля для редактирования.

*Требуется реализовать возможность добавления нескольких подчиненных к одному руководителю,* **отобразить кнопку "Подчиненный +",**  *для добавления дополнительного подчиненного.*

*Необходимо* **отобразить кнопку "Новая связь"** *, для добавления дополнительной связи руководитель-подчиненный.*

Должно быть реализованно поле "Комментарий" для добавления пояснений к орг.структуре. 

*Необходимо* **отобразить кнопку "Сохранить"** *, для сохранения изменений.*

Если редактор забыл указать связь, добавленные сотрудники без связи автоматически привязываются к автору проекта.

### Раздел Задачи

На странице должен быть указан автор (имя указанное в регистрации). 

В разделе возможно создавать и редактировать задачи. Формы создания и редактирования выглядят одинаково.

При открытии раздела в случае отсутствия задач установить надпись "Задачи отсутствуют".

Если задачи в проекте уже существуют,то у пользователя отображаются все задачи проекта.

#### Фильтрация

На данной странице должна быть реализована возможность фильтрации задач с помощью кнопки "Фильтр". Поля фильтра можно комбинировать.

Фильтр реализован в формате: выпадающее окно с выбором значений полей и  **кнопкой "применить"**

Фильтрация происходит по следующим полям:

• Статус

• Автор (формат: автор-пользователь или все)

• Исполнитель (формат: исполнитель-пользователь или все)

• Спринт (по номеры спринта)

#### Создание задачи

Указать предложение для создания первой задачи, **отображена кнопка "создать первую задачу"**. 

Через выпадающий список на верхнем меню с помощью кнопки "Создать" должна быть возможность выбрать "Задача",для создания задачи.

Далее открывается страница создания задачи.

*Создание задачи не возможно при отсутствии спринтов. Необходимо пользователю вывести информацию о необходимости создания спринта и открыть страницу для его создания.*

На странице должна отображаться информация о создании задачи с указанием следующих полей:

•       Проект(проставляется автоматически текущий проект);

•       Автор(проставляется автоматически,изменять нельзя); 

•       Исполнитель (обязательное поле для заполнения)
Если "Испонитель" не выбран,то исполнителем назначается сам автор ;

•	Спринт (обязательное поле для заполнения). Должно отображаться в виде: номер спринта и его продолжительность(дата начала и конца);

•	Статус (обязательное поле для заполнения);

•	Описание;

Поле "Комментарии" не отображается при создании задачи, только при внесении изменений.

Если не заполнены обязательные поля, создать задачу невозможно. Необходимо сообщить об этом пользователю.

В верхнем правом углу должны быть следующие элементы: 

• "галка", в случае если вся информация введена и пользователь готов завершить создание задачи;

• "три точки", далее отобразить кнопки *"Дублировать" и "Удалить".*

Далее задача должна отображаться в соответствующем разделе по спринту и статусу.

**В верхней части страницы должно быть отображено поле "Поиск", для осуществления поиска по задачам.**

### Раздел Спринты

При открытии раздела в случае отсутствия спринтов установить надпись "Спринты отсутствуют".

Если спринты в проекте уже существуют,то у пользователя отображаются все спринты проекта в соответствии со статусом "Активные" или "Завершенные". Спринт отображается в формате: номер (Дата начала-Дата конца). Необходимо реализовать автоматическую сортировку при отображении пользователю.

Должна быть отображена *кнопка Создать спринт* и реализована возможность его создания при нажатии кнопки.

Так же требуется реализовать возможность создания спринта через кнопку *в верхнем меню "Создать"*.

Необходимо так же реализовать возможность редактирования спринта. Форма создания и редактирования одинаковая.

#### Создание спринта

Далее открывается страница создания спринта.

На странице должна отображаться информация о создании спринта с указанием следующих полей:

•       Название спринта (обязательное поле для заполнения);

•       Количество дней в спринте (обязательное поле для заполнения). Должна быть возможность выбрать от 1-31 дней;

•       Дата начала (обязательное поле для заполнения). Оповезать пользователя при вводе неправильной даты, а так расположить информацию о формате ввода даты.
Дата окончания высчитывается автоматически в зависимости от длительности(отображать при создании спринта нет необходимости);

•	Цель спринта(поле не обязательно для заполнения).

Если не заполнены обязательные поля, создать спринт невозможно. Необходимо сообщить об этом пользователю.

В верхнем правом углу должны быть следующие элементы: 

• "галка", в случае если вся информация введена и пользователь готов завершить создание спринта;

• "три точки", далее отобразить кнопку *"Удалить".*

Далее спринт должен отображаться в соответствующем разделе по статусу. Спринты должны быть отсортированы в соответствии с датой создания.

## Нефункциональные требования к веб-приложению:

• Возможность работы в системе нескольким пользователям одновременно; 

• Веб-приложение рассчитано на команду не более 10 человек.

• Время ожидания при открытии страницы должно составлять не более 5 сек;

• На странице Регистрации расположена информация об обработке персональных данных, что соответствует 152-ФЗ «О персональных данных»;

• Клиент должен взаимодействовать с сервером посредством протокола SSL;

• Веб-приложение должно функционировать в браузере ПК при наличии интернета или сети WiFi.

## Архитектура Веб-приложения

Модель компонентов веб-приложения: один веб-сервер, одна база данных. 

Веб-приложение является монолитным,но реализуется возможность создания несколько проектов одновременно для чистоты кода. 

Тип архитектуры веб-приложения: Архитектура одностраничных приложений.

Благодаря SPA (одностраничное приложение) достигается плавная работа приложения, интуитивно понятное и интерактивное взаимодействие с пользователем.
Вместо загрузки новой страницы SPA загружают одну веб-страницу и перезагружают запрошенные данные на той же странице с динамически обновляемым содержимым. Остальная часть веб-страницы остается нетронутой. SPA разрабатываются на стороне клиента с использованием фреймворков JavaScript, так как вся логика всегда переносится на фронтенд.

![Схема](https://github.com/DibrovDru/Architecture.1/raw/dev_muratov/images/single-page-application.png)

Веб-приложение построена на следующей цепочке взаимодействия:

![Схема](https://github.com/DibrovDru/Architecture.1/raw/dev_muratov/images/klient_server.PNG)

Основные критерии построения надежной архитектуры веб-приложения:

• Эффективность;

• Гибкость;

• Легкость в тестировании;

• Последовательность и успешность в решении задач;

• Хорошо структурированный и понятный код;

• Масштабируемость в процессе разработки;

• Быстрое время отклика;

• Простота;

• Опора на опробованные стандарты безопасности.

Основные достоинства выбранной архитектуры заключаются в следующем:

• *Простота развертывания.* Монолиты очень быстро и относительно просто развертывать, благодаря тому что у монолита обычно единая точка входа;

• *Разработка.* Разработка монолита обычно происходит быстро, потому что все компоненты и модули находятся в одной кодовой базе и всегда под рукой;

• *Отладка.* Отладка монолита очень упрощена за счет того, что все рядом, и есть возможность отследить все звенья выполнения кода.

## Веб-приложение постоено на базе следующих технологий:

• Серверная часть - бэкэнд, управляет бизнес-логикой и отвечает на HTTP-запросы. 

Серверный код написан на Java (spring). 

• Сторона клиента - интерфейс, именно здесь происходит взаимодействие с пользователем.

Код написан на JavaScript (react) и хранится в браузере.

• Сервер базы данных, который отправляет запрошенные данные на сторону сервера.

Используется PostgreSQL.

## Описание БД

![Схема](https://github.com/DibrovDru/Architecture.1/raw/dev_muratov/images/base.png)

### Имеющиеся сущности:

#### Сущности БД

1. Проекты (Project)

• id - идентификатор 

• author - автор

• sprint_id - временной промежуток

• text - описание

• participant - участник проекта

2.	Сотрудник (Employee)

• id - идентификатор 

• project_id - проект

• relation_id - связь(уровень иерархии) в проекте

• name - имя 

• surname - фамилия 

• e-mail - адрес электронной почты 

• password - пароль 

3. Связи (Relation)

• id - идентификатор 

• master - старший

• slave - младший

4. Временной промежуток (Sprint)

• id - идентификатор

• start - время начала

• finish - время окончания

 5. Задача (Task)

•  id - идентификатор 

• project_id - проект

• sprint_id - временной промежуток

• head - наименование 

• text - описание

• status_id - статус

• executor - назначенный сотрудник

• comments_id - комментарий

6. Комментарии (Comments)

• id - идентификатор 

• task_id - идентификатор задачи к которому привязан комментарий

• text - описание

• time - время создания

• author - автор комментария

7. Статус (Status)

• id - идентификатор 

• open - открытый

• active - в работе

• resolved - завершенный

## Требования к управлению изменениями

Все изменения кода веб-приложения должны внедряться с использованием системы контроля версий – git после предварительного тестирования на тестовом сервере.

## Прототипирование

Рабочий прототип, который отражает основные функции и возможности веб-приложения расположен по адресу: 

## [Прототип проекта ](https://www.figma.com/file/d9q8Aq04k7I1F0bYrjSZba/deta?node-id=0%3A1&t=yvdLZ74Ivj2hrkme-1)

## Создание дизайна

На данном этапе необходимо выполнить:

Создание полноцветного дизайна для требуемых разрешений экранов в соответствии с разработанной структурой и логикой, а также стилевыми пожеланиями Заказчика.
Артефакты:

UX/UI дизайн проекта (макеты основных видов приложения для заданных разрешений).

##  Верстка и разработка

На данном этапе необходимо выполнить:

Разработка веб-интерфейса приложения с заданным функционалом согласно макету;

Разработка серверной части приложения и базы данных;

Интеграция со смежными системами.

Артефакты:

Полнофункциональная версия приложения.

## Тестирование

На данном этапе необходимо выполнить:

Тестирование приложения, исправление выявленных ошибок, оптимизация.

Выполняются следующие виды тестирования:

Unit тестирование;

Интеграционное тестирование;

UAT тестирование;

Нагрузочное тестирование;

Тестирование безопасности.

Артефакты:

Работоспособный сайт(веб-приложение), прошедший испытания и готовый к эксплуатации.

##  Документирование

На данном этапе необходимо выполнить:

Разработку комплекта документации, согласно требованиям данного технического задания.

Артефакты:

Программная и эксплуатационная документация.
