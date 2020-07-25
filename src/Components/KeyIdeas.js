import React, {useContext, useEffect, useState} from 'react';
import '../Styles/KeyIdeas.css'
import {PostFromServer} from "../Helpers/api";
import LoadingSpinner from "./LoadingSpinner";
import Post from "./Post";

const KeyIdeas = () => {
    const [post, setPost] = useState([]);
    const [alert, setAlert] = useState(false)
    const posts = useContext(PostFromServer)


    useEffect(() => {
        let startIndex = Math.ceil(Math.random() * 97);
        console.log(startIndex)
        setTimeout(() => {
            posts.then(data => data.slice(startIndex, startIndex + 3)).then(data => setPost(data))
            setAlert(true)
        }, 3000)
    }, [posts])

    return (
        <main className="KeyIdeas">
            {post.length === 0 ? (
                <div className="KeyIdeas_preloader">
                    <p style={{
                        display: `${alert 
                            ? 'initial'
                            : 'none'}`
                    }}>
                        {alert}
                    </p>
                    <div
                        style={{
                        display: `${alert
                            ? 'none'
                            : 'initial'}`
                    }}
                    >
                        <LoadingSpinner/>
                    </div>
                </div>
            ) : (
                <>
                    <header className="KeyIdeas_header">Key Ideas</header>
                    <section className="KeyIdeas_posts">
                        {post.map(el => (
                            <Post key={el.id} data={el}/>
                        ))}
                    </section>

                </>
            )
            }
        </main>
    );
}

export default KeyIdeas;