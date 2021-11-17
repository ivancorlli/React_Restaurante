import UserProvider from "./contexts/UserProvider";
import AppRouter from "./routes/AppRouter";



function App() {
  return (
      <>
        <UserProvider>
        <AppRouter/>
        </UserProvider>
      </>
  )
}

export default App;
