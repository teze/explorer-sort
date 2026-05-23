#!/bin/bash

# Explorer Sort 插件开发脚本

set -e

echo "🚀 Explorer Sort 开发工具"
echo "=========================="
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误: 未找到 Node.js"
    echo "请先安装 Node.js: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js 版本: $(node --version)"
echo "✓ npm 版本: $(npm --version)"
echo ""

# 显示菜单
echo "请选择操作:"
echo "1) 安装依赖"
echo "2) 编译项目"
echo "3) 监听模式（自动编译）"
echo "4) 代码检查"
echo "5) 清理输出"
echo "6) 打包插件"
echo "7) 完整构建（安装+编译+检查）"
echo "0) 退出"
echo ""

read -p "请输入选项 [0-7]: " choice

case $choice in
    1)
        echo ""
        echo "📦 安装依赖..."
        npm install
        echo "✓ 依赖安装完成"
        ;;
    2)
        echo ""
        echo "🔨 编译项目..."
        npm run compile
        echo "✓ 编译完成"
        ;;
    3)
        echo ""
        echo "👀 启动监听模式..."
        echo "按 Ctrl+C 停止"
        npm run watch
        ;;
    4)
        echo ""
        echo "🔍 运行代码检查..."
        npm run lint
        echo "✓ 检查完成"
        ;;
    5)
        echo ""
        echo "🧹 清理输出目录..."
        rm -rf out
        echo "✓ 清理完成"
        ;;
    6)
        echo ""
        echo "📦 打包插件..."
        if ! command -v vsce &> /dev/null; then
            echo "安装 vsce..."
            npm install -g @vscode/vsce
        fi
        vsce package
        echo "✓ 打包完成"
        ;;
    7)
        echo ""
        echo "🔧 完整构建..."
        echo ""
        echo "1/3 安装依赖..."
        npm install
        echo ""
        echo "2/3 编译项目..."
        npm run compile
        echo ""
        echo "3/3 代码检查..."
        npm run lint
        echo ""
        echo "✓ 构建完成"
        ;;
    0)
        echo "👋 再见！"
        exit 0
        ;;
    *)
        echo "❌ 无效选项"
        exit 1
        ;;
esac

echo ""
echo "=========================="
echo "✨ 操作完成！"
echo ""
echo "💡 提示:"
echo "  - 按 F5 在 VS Code 中启动调试"
echo "  - 查看 GUIDE.md 了解详细使用方法"
echo "  - 查看 TEST.md 了解测试清单"
