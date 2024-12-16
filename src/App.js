import './App.css'
import Header from './Header/Header.js'
import Post from './Post/Post.js';
import Button from './Button/Button.js'
import SideMenu from './SideMenu/SideMenu.js';
import PostsMenu from './PostsMenu/PostsWrapper.js';

function Wrapper({ children }) {
    const styles = {
        width: "60%",
        margin: "auto",
        display: "flex",
        gap: "2px"
    }
    

    return <div style={styles}>{children}</div>
}

function App() {
    return (
        <>
            <Header />

            <Wrapper>

                <PostsMenu>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </PostsMenu>
                
                <SideMenu>
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                </SideMenu>

            </Wrapper>
        </>
    )
}

export default App;