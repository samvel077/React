import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Bootcamps from "./components/Bootcamps/Bootcamps";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ResetPasswordPage from "./components/ResetPasswordPage/ResetPasswordPage";
import UpdatePassword from "./components/UpdatePasswordPage/UpdatePasswordPage";
import { connect } from "react-redux";
import { useEffect } from "react";
import Loader from "./components/Loader/Loader";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import CustomRoute from "./components/CustomRoute";

function App(props) {
  const {
    successMessage,
    error,
    authSuccessMessage,
    authError,
    authLoading,
    loading,
  } = props;

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (authSuccessMessage) {
      toast.success(authSuccessMessage);
    }
    if (authError) {
      toast.error(authError);
    }
  }, [successMessage, error, authSuccessMessage, authError]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bootcamps" exact component={Bootcamps} />
        <CustomRoute path="/login" exact component={Login} />
        <CustomRoute path="/register" exact component={Register} />
        <CustomRoute
          path="/resetpassword"
          exact
          component={ResetPasswordPage}
        />
        <CustomRoute
          type="private"
          path="/updatepassword"
          exact
          component={UpdatePassword}
        />
        <Route path="*" exact component={NotFoundPage} />
      </Switch>

      <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {(loading || authLoading) && <Loader />}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    error: state.bootcampsReduser.loading,
    loading: state.bootcampsReduser.loading,
    authError: state.authReduser.error,
    authSuccessMessage: state.authReduser.successMessage,
    authLoading: state.authReduser.loading,
  };
};

export default connect(mapStateToProps, null)(App);
