import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { useState } from 'react'
import './Root.css'

export default function Root() {
  const posts = useLoaderData()
  const [ searchTerm, setSearchTerm ] = useState('')

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
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)}
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
        </div>
        <nav>
        {posts.length ? (
            <ul>
              {
                posts.filter(post => {
                  if(searchTerm === '') {
                    return post
                  } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return post
                  }
                }).map((post) => (
                  <li key={post.slug}>
                    <NavLink to={`post/${post.slug}`}>
                      {post.title ? (
                        <>
                          {post.title}
                        </>
                      ) : (
                        <i>Untitled</i>
                      )}{" "}
                    </NavLink>
                  </li>
                ))
              }
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