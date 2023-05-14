### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
    restful routing is a format of writing api structure, so that it is a standarized and provide ease of use for the users
- What is a resource?
    any data (entity or object) that can be shared throu URI
- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
    because of separation of concerns. api should only return the data, and rendering is upto the user.
- What does idempotent mean? Which HTTP verbs are idempotent?
    an idempotent request can be used multiple times without changing the result, such as get
- What is the difference between PUT and PATCH?
    while PUT is used to replace the whole entry, PATCH is used to fix one item of the object
- What is one way encryption?
    it is also known as hasing, which adds a layer of complexity when cracking the credentials of users.
- What is the purpose of a `salt` when hashing a password?
    salt is an additional string that gets added while hasing to prevent people from finding out way an object was hashed, thus breaking the security
- What is the purpose of the Bcrypt module?
    Bcrypt module is an encyption module that easily allows the users to protect sensitive information. 
- What is the difference between authorization and authentication?
    authentication is process of acknowledging a user, using the id and pw, while authorization is granting the access
