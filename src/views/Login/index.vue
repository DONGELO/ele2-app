<template>
    <div class="login">
        <div class="login-header">
            <div class="login-logo"><img src="@/assets/logo.png" alt=""></div>
            <div class="login-text">
                <h2>欢迎进入停车专家</h2>
                <p>输入手机号快捷登录</p>
            </div>
        </div>
        <!--from表单-->
        <div class="login-user-box">
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <!-- <van-field
                    v-model="ruleFrom.phone"
                    center
                    clearable
                    prop="getCodeValue"
                    placeholder="请输入手机号"
                    @btnClick="getVerifyCode"
                    /> -->
                    <van-field
                    v-model="username"
                    label="手机号"
                    prop="getCodeValue"
                    placeholder="请输入手机号"
                    :rules="[{ required: true, message: '请输入正确的手机号' }]"
                    />
                    <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                    />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                    提交
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
    import { ref, reactive } from '@vue/composition-api'
    export default {
    setup() {
        const username = ref('');
        const password = ref('');
        const onSubmit = (values) => {
        console.log('submit', values);
        };

        return {
        username,
        password,
        onSubmit,
        };
    },
    };
</script>

<style lang="scss" scoped>
    .login-header{
        display: flex;
        margin-top: 120px;
        align-items: center;
        justify-content: center;
        .login-logo{
            margin-right: 20px;
            img{
                width: 64px;
                height: 64px;
            }
        }
        .login-text{
            h2{
                font-size: 26px;
            }
        }
    }
    .login-user-box{
        margin-top: 80px;
    }
</style>