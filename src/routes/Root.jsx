import { Link, Outlet, useLoaderData } from "react-router-dom";
import { useEffect, useState } from 'react'

export default function Root() {
  const posts = useLoaderData()

  return (
    <>
      <div id="sidebar">
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          {/* <form method="post">
            <button type="submit">New</button>
          </form> */}
        </div>
        <nav>
        {posts.length ? (
            <ul>
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link to={`post/${post.slug}`}>
                    {post.title ? (
                      <>
                        {post.title}
                      </>
                    ) : (
                      <i>Untitled</i>
                    )}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No Posts :(</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}