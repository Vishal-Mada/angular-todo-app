# Angular To-Do Application ✅

A feature-rich to-do list application built with modern Angular, covering a wide range of core framework concepts.

![Angular Todo App Screenshot](https://i.imgur.com/kP1D5O1.png)
*(Feel free to replace this with your own screenshot!)*

---

## About The Project

This is not just a simple to-do list. It was built as a comprehensive learning project to implement and demonstrate key features of the Angular framework. The application allows users to manage their daily tasks with a clean, responsive interface. All data is persisted in the browser's local storage, so your tasks are saved even after you close the tab.

---

## Features

* **Add, Delete, and Complete Tasks:** Core to-do list functionality.
* **Edit Tasks:** Double-click any task to edit it in place.
* **Persistent Storage:** Tasks are saved in the browser's Local Storage, so they don't disappear on refresh.
* **Task Filtering:** View all tasks, only the active ones, or only the completed ones.
* **Lazy Loading:** The main to-do feature is lazy-loaded for better initial application performance.

---

## Built With

* ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
* ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

---

## Key Angular Concepts Implemented

This project serves as a practical example of the following Angular concepts:

* **Component-Based Architecture**
* **Data Binding:** One-way `{{ }}`, `[ ]` and event `( )` binding.
* **Two-Way Binding:** `[(ngModel)]` for form inputs.
* **Pipes:** Used `uppercase` and `date` for data transformation in the template.
* **Routing:**
    * `routerLink` for declarative navigation.
    * `router.navigate()` for programmatic navigation (in Guards).
    * **Lazy Loading** feature modules to improve performance.
* **Services & Dependency Injection:** Centralized data management with `TodoService`.
* **Template-Driven Forms:** Used for adding and editing tasks.
* **Route Guards:** `canActivate` to protect routes from unauthorized access.
* **Bundling:** Understood via the Angular CLI's `ng build` process.