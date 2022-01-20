import React, {Component, Dispatch} from "react";
import ExamForm from "../Component/exam/Form/ExamForm";
import {Card} from "antd";
import {getRouterPath, routerC, routerE} from "../Config/router";
import {UserState} from "../Type/Iuser";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {withRouter} from "react-router";
import ExamList from "../Component/exam/ExamList";

class MExam extends Component<any, any> {


    constructor(props: any, context: any) {
        super(props, context);

    }

    componentDidMount() {
        if (!this.props.isLogin) {
            this.props.history.push(getRouterPath(routerC, 1))
        }
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (!this.props.isLogin) {
            this.props.history.push(getRouterPath(routerC, 1))
        }
    }

    render() {
        return (
            <>
                <Card
                    bordered={false}
                    title={"考试列表"}
                    extra={[
                        <ExamForm type={"create"}/>
                    ]}
                >
                    <ExamList type={"manage"}/>
                </Card>


            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    const UState: UserState = state.UserReducer
    return {
        isLogin: UState.isLogin
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    withTranslation()(
        withRouter(MExam)
    ))