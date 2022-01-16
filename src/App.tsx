import React, {Component, Dispatch, Suspense} from 'react';

import './App.css';
import 'antd/dist/antd.css';
import './Config/i18n'
import { ConfigProvider} from "antd";
import "vditor/src/assets/scss/index.scss";
import {thirdPartyLoginAction} from "./Type/Iuser";
import {connect} from "react-redux";
import {ConfigState} from "./Type/IConfig";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Loading from "./Utils/Loading";
import {routerLayout} from "./Config/router";
import {testLoginTodo, thirdPartyLoginTodo} from "./Redux/Action/user";



class App extends Component<any, any> {


    constructor(props: any) {
        super(props);
    }


    /*
    * TODO  用户
    *  1. 把 List 与 头部 抽象出去
    *  2. 把 Form 单独存放
    *  3. 实现 上传
    *  4. 实现 添加
    *  5. 处理 编辑内修密码与信息的逻辑
    * */

    /*
    * TODO  题目
    *  1.
    * */

    componentDidMount() {

    }

    render() {
        return (
            // antd 全局化配置  国际化参数
            <ConfigProvider locale={this.props.local}>
                {/*顶级路由*/}
                <Router>
                    <Suspense fallback={<Loading/>}>
                        {
                            routerLayout.map((r) => {
                                return (
                                    <Route key={r.id} path={r.path} exact={r.exact}
                                           component={r.component}/>
                                )
                            })
                        }
                    </Suspense>
                </Router>
            </ConfigProvider>
        );
    }

}

const mapStateToProps = (state: any) => {
    const State: ConfigState = state.ConfigReducer
    return {
        local: State.lang,
        timestamp: State.timestamp
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    thirdPartyLogin: (data: thirdPartyLoginAction) =>
        dispatch(thirdPartyLoginTodo(data)),
    updateTimestamp: (data: number) => dispatch({
        type: "updateTimestamp",
        timestamp: data
    }),
    testLogin: () => dispatch(testLoginTodo())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
