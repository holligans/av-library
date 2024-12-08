# Alexander F Vazquez - take-home assessment

# Project Notes:

## Modal Component
1. **Core functionality**  The modal works and passes the provided tests; however, it lacks focus management, which significantly impacts usability. Without proper focus management, the component becomes less accessible and disrupts the user experience, particularly for assistive technologies.
2. **Scalability** To enhance scalability, I would implement the Compound Component Pattern along with styled-components, allowing the creation of subcomponents such as <Modal.Header>, <Modal.Footer>, and others. This approach ensures flexibility and reusability

## Decisions Made
- **Project Setup**: I used Vite, TypeScript, Vitest, React and RTL as recommended. These tools provide a modern, efficient, and fast development environment
- **CSS-in-JS**: (Not implemented) I plan to use styled-components to manage styles. This ensures scoped, dynamic styling and allows for theme integration, enhancing maintainability and flexibility.
- **Distribution**: (Not implemented) I will distribute this library through npm registery, I based my descision in two assumptions 
1. The library will be used across most or all apps within the organization
2. The organization does not use monorepo neither micro-frontends 
Note:Vite needs to be configured in vite.config.ts for building an actual library bundle ready for npm registery

## Future Improvements
1. **Styling/Theming**:
   - Add a ThemeProvider to enable customizable design tokens and consistent theming.
2. **Modal Feature Enhancements**:
   - Support customization of the modal, buttons, and backdrop for greater flexibility.
   - Add lifecycle callbacks such as afterOpen, afterClose, and afterOk.
   - Provide pre-defined modal variations (e.g., ModalError, ModalWarning, ModalInfo).
3. **Testing**:
   - Expand test coverage for edge cases and accessibility in the modal (Include tests for focus management and keyboard navigation).
4. **DX**
    -Add Storybook:Improve developer experience and debugging, it serve as documentation for users. 
    -Add Prettier combined with a linter like ESLint: to enforce a consitent coding style in the codebase

