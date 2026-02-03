import "./Main.css";

const Main = () => {
  const user = {
    name: "Sunho",
    isLogin: true,
  };

  //   if (user.isLogin) {s
  //     return <div>로그아웃</div>;
  //   } else {
  //     return <div>로그인</div>;
  //   }

  return (
    <main>
      {user.isLogin ? (
        <div className="logout">로그아웃</div>
      ) : (
        <div>로그인</div>
      )}
    </main>
  );
};

export default Main;
