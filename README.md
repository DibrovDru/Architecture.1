# Система управления задачами 
## [Прототип проекта ](https://www.figma.com/file/d9q8Aq04k7I1F0bYrjSZba/deta?node-id=0%3A1&t=yvdLZ74Ivj2hrkme-1)

### **Основные понятия:**
 *Спринт*- это короткий временной интервал, в течение которого scrum-команда выполняет заданный объем работы. В нашем проекте это 1 неделя.
 
 *Тимлид* - сотрудник, руководитель - корень дерева, которому подчиняются другие сотрудники, которые могут иметь или не иметь подчинённых.
 
 *Open* - задача создана, но к её выполнению ещё не приступили
 
 *Active* - задача находится в процессе выполнения
 
 *Resolved* - задача выполнена

### **Цель создания веб-приложения:**
1.	Реализовать возможность регистрации пользователей и их авторизацию по E-mail и паролю.

2. Реализовать возможность создания, редактирования и просмотра задач за день и за спринт(система управления задачами).

Веб-приложение будет полезно тем,кто ведет учет данных по задачам в таблицах или на листе бумаги. Присутствует возможность создания,назначения и ведения задач по каждому сотруднику.

Веб-приложение гарантирует сохранность данных и простой способ работы с большим объемом данных, а главное система прозрачна и маштабируема.

### **Целевая аудитория:**
Офисная команда состоящая из тимлида и сотрудников.

Веб-приложение рассчитано на команду не более 10 человек.

Иерархия сотрудников представляется следующим образом: 

![Схема](https://github.com/DibrovDru/Architecture.1/raw/dev_muratov/images/ierarhia.jfif)

### **Веб-приложение постоено на базе следующих технологий:**

• Серверная часть - бэкэнд, управляет бизнес-логикой и отвечает на HTTP-запросы. 

Серверный код написан на Java (spring). 

• Сторона клиента - интерфейс, именно здесь происходит взаимодействие с пользователем.

Код написан на JavaScript (react) и хранится в браузере.

• Сервер базы данных, который отправляет запрошенные данные на сторону сервера.

Используется PostgreSQL.

## Описание БД

![Схема](https://github.com/DibrovDru/Architecture.1/raw/dev_muratov/images/base.png)

## Методология разработки

Наша команда использовала гибкую методику разработки Agile. Что поспособствовало быстрой и эффективной разработке веб-приложения.

![Схема](https://github.com/DibrovDru/Architecture.1/raw/dev_muratov/images/agile.png)

## **Создатели проекта**

*Тим-лид/Дизайнер:* 

Голованова София Владимировна 

*Разработчик/Тестировщик:* 

Дибров Андрей Алексеевич 

Боровец Андрей Васильевич

*Технический писатель/Аналитик:* 

Муратова Светлана Алексеевна

Муратов Николай Сергеевич
