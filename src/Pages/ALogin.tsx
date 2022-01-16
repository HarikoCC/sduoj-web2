import React, {Component, Dispatch} from "react";
import {Card} from "antd";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {withRouter} from "react-router";
import {UserState} from "../Type/Iuser";
import {testLoginTodo} from "../Redux/Action/user";
import Login from "../Component/user/Login";
import getUrlParams from "../Utils/getUrlParams";


class ALogin extends Component<any, any> {

    constructor(props: any, context: any) {
        super(props, context);
    }

    testLogin = ()=>{
        if (this.props.isLogin) {
            let to = getUrlParams(this.props.location.search).to
            if (to === undefined) this.props.history.push("/v2/home")
            else this.props.history.push(to)
        }
    }

    componentDidMount() {
        this.testLogin()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        this.testLogin()
    }

    render() {
        return (
            <>
                <Login/>
            </>
        )
    }
}


const mapStateToProps = (state: any) => {
    const UState: UserState = state.UserReducer
    return {
        isLogin: UState.isLogin,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    testLogin: () => dispatch(testLoginTodo())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    withTranslation()(
        withRouter(ALogin)
    ))