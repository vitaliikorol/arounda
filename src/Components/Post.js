import React, {useLayoutEffect, useState} from "react";
import '../Styles/Post.css'


const Post = (props) => {
    const [color, setColor] = useState('')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useLayoutEffect(() => {
        function updateSize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const setHoverColor = () => {
        setColor('#FFFFFF')
    }
    const removeHoverColor = () => {
        setColor('')
    }


    return (
        <section onMouseEnter={setHoverColor}
                 onMouseLeave={removeHoverColor}
                 className="Post">
            <footer
                className="Post_footer"
                style={{
                    color: `${color}`,
                    display: `${windowWidth <= 900 ? 'initial' : 'none'}`
                }}
            >
                {props.data.id}
            </footer>
            <header className="Post_title" style={{color: `${color}`}}>
              {props.data.title}
            </header>
            <article className="Post_body" style={{color: `${color}`}}>
                {props.data.body}
            </article>
            <footer
                className="Post_footer"
                style={{
                    color: `${color}`,
                    display: `${windowWidth > 900 ? 'initial' : 'none'}`
                }}
            >
                {props.data.id}
            </footer>
        </section>
    )
}

export default Post;