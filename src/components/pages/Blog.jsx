import useTitle from "../../hook/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <>
      <div className="mockup-window border bg-base-300 mt-5">
        <h2 className="text-2xl font-semibold text-center py-4">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h2>
        <div className="  px-4 py-6 bg-base-200">
          <h3>
            An access token and a refresh token are commonly used in
            authentication systems, such as OAuth or JWT, to grant and manage
            access to protected resources.
          </h3>
          <br />
          <p>
            Access Token: An access token is a short-lived token that is issued
            to a client (e.g., a user or an application) after successful
            authentication. It contains information about the client and
            permissions granted, usually in the form of claims or scopes. The
            access token is used to authenticate the client when making requests
            to access protected resources on the server. It typically has a
            shorter lifespan (e.g., minutes or hours) and needs to be refreshed
            or renewed periodically. Refresh Token: A refresh token is a
            long-lived token that is also issued to a client after successful
            authentication. It is used to obtain a new access token without
            requiring the client to re-authenticate. Refresh tokens have a
            longer lifespan (e.g., days, weeks, or months) compared to access
            tokens. When the access token expires, the client can use the
            refresh token to request a new access token from the authentication
            server.
          </p>
        </div>
      </div>
      <div className="mockup-window border bg-base-300 mt-5">
        <h2 className="text-2xl font-semibold text-center py-4">
          Compare SQL and NoSQL databases?
        </h2>
        <div className="  px-4 py-6 bg-base-200">
          <h3>
            SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
            different types of databases that differ in their data models, query
            language, scalability, and use cases. Here are some key points of
            comparison between SQL and NoSQL databases:
          </h3>
          <br />
          <p>
            Data Model: SQL: SQL databases use a structured data model with
            predefined schemas. Data is organized into tables with rows and
            columns, and relationships between tables are established using
            primary and foreign keys. NoSQL: NoSQL databases use a variety of
            data models, including key-value pairs, document-based, columnar,
            and graph-based. They provide flexibility in storing unstructured or
            semi-structured data without strict schema requirements. Query
            Language: SQL: SQL databases use SQL as the standard query language
            for retrieving, manipulating, and managing data. SQL offers a
            declarative approach, allowing users to specify what data they want
            without needing to specify how to retrieve it. NoSQL: NoSQL
            databases often have their own query languages that are specific to
            the chosen data model. Some NoSQL databases provide SQL-like query
            languages for convenience, but they may lack certain advanced SQL
            features. Scalability: SQL: SQL databases traditionally scale
            vertically by adding more resources to a single server. They are
            well-suited for handling structured data and complex joins, but
            scaling can be limited by the capacity of a single server. NoSQL:
            NoSQL databases are designed to scale horizontally by distributing
            data across multiple servers or clusters. They can handle large
            volumes of data and high read/write workloads with ease.
          </p>
        </div>
      </div>
      <div className="mockup-window border bg-base-300 mt-5">
        <h2 className="text-2xl font-semibold text-center py-4">
          What is express js? What is Nest JS?
        </h2>
        <div className="  px-4 py-6 bg-base-200">
          <h3>
            Express.js is a minimal and flexible web application framework for
            Node.js. It provides a set of features and tools to build web
            applications and APIs quickly and easily. Express.js simplifies the
            process of handling HTTP requests, routing, middleware integration,
            and rendering dynamic content. It follows the middleware pattern,
            allowing developers to add functionality in a modular way using
            middleware functions. Express.js is widely used in the Node.js
            ecosystem and is known for its simplicity, extensibility, and
            robustness.
          </h3>
          <br />
          <p>
            NestJS, on the other hand, is a progressive Node.js framework for
            building efficient, scalable, and maintainable server-side
            applications. It is built on top of Express.js and enhances it with
            additional features and architectural patterns. NestJS follows the
            principles of modularity, reusability, and testability, making it
            suitable for building large-scale applications. It provides a
            structured and opinionated approach to application development,
            utilizing TypeScript as its primary language. NestJS leverages
            decorators, dependency injection, and modules to create a highly
            modular and organized codebase. It also integrates well with other
            libraries and frameworks in the Node.js ecosystem.
          </p>
        </div>
      </div>
      <div className="mockup-window border bg-base-300 mt-5">
        <h2 className="text-2xl font-semibold text-center py-4">
          What is MongoDB aggregate and how does it work
        </h2>
        <div className="  px-4 py-6 bg-base-200">
          <h3>
            In MongoDB, the aggregate method is used for performing complex data
            analysis operations and aggregations on the data stored in a
            collection. It allows you to process multiple documents in a
            collection and transform them into aggregated results based on the
            specified criteria.
          </h3>
          <br />
          <p>
            The aggregate method takes an array of stages as its argument. Each
            stage represents a specific operation or transformation to be
            applied to the data. The stages are processed in sequence, with the
            output of one stage serving as the input to the next stage. Some
            commonly used stages in the aggregation pipeline are: $match:
            Filters the documents based on specified conditions. $group: Groups
            the documents by a specified field and performs aggregate functions
            like sum, count, average, etc. on the grouped data. $project:
            Specifies the fields to include or exclude from the output documents
            and
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
