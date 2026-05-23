# 修复说明

## 问题描述

**时间**: 2026-05-23  
**错误**: `CodeExpectedError: 没有注册配置 files.sortOrder`

## 根本原因

代码中使用了错误的配置命名空间：
- ❌ 错误: `files.sortOrder`
- ✅ 正确: `explorer.sortOrder`

VS Code 的资源管理器排序配置实际上是在 `explorer` 命名空间下，而不是 `files` 命名空间。

## 修复内容

### 1. 修改配置命名空间

**文件**: `src/extension.ts`

```typescript
// 修复前
const config = vscode.workspace.getConfiguration('files');

// 修复后
const config = vscode.workspace.getConfiguration('explorer');
```

### 2. 修复位置

- `applySortOrder()` 函数 (第 101 行)
- 错误处理部分 (第 157 行)

### 3. 更新文档

- `PROJECT.md` - 更新 API 映射表
- `SUMMARY.md` - 更新配置说明

## 验证

```bash
# 重新编译
npm run compile

# 结果: ✅ 编译成功，无错误
```

## 正确的配置项

VS Code 资源管理器排序配置：

```json
{
  "explorer.sortOrder": "default" | "alphabetical" | "type" | "modified" | "filesFirst"
}
```

## 测试建议

1. 按 F5 启动扩展开发主机
2. 打开任意文件夹
3. 点击排序图标
4. 选择不同的排序方式
5. 验证排序生效且无错误

## 相关文档

- [VS Code Settings Reference](https://code.visualstudio.com/docs/getstarted/settings)
- `explorer.sortOrder` - 控制资源管理器中文件和文件夹的排序方式

---

**修复状态**: ✅ 已完成  
**编译状态**: ✅ 通过  
**可测试**: ✅ 是
