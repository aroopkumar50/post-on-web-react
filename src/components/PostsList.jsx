import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
    return (
        <ul className={classes.posts}>
            <Post author="Aroop" body="I am Aroop (Message1)" />
            <Post author="Kumar" body="I am Kumar (Message2)" />
        </ul>
    );
}

export default PostsList;
