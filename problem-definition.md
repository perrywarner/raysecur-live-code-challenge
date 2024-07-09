Task:

Create an interface using React for managing a list of users. Each user has the following fields:

- id
- name
- email
- role: options are Administrator and User

Example user data:

```
[
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Administrator' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]
```

Your interface should allow for basic creation and deletion of the users. In the interest of time, managing the users in local react state is acceptable.

Requirements:

1. Display information for users
2. ability to add a new user
3. Add functionality to delete a specific user

Bonus (pick any):

1. optimize the display component to efficiently handle a large number of users
2. add functionality to edit user information
3. add functionality to search for a specific user or user attributes