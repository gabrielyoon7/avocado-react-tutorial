import MemoItem from "./MemoItem";

const MemoList = ({ memoList, onDelete }) => {
    return (
        <div className="MemoList">
            <h2>메모 리스트</h2>
            <div>
                {memoList.map((it) => (
                    <MemoItem key={it.id} {...it} onDelete = {onDelete}/>
                ))}
            </div>
    </div>
    );
};

MemoList.defaultProps = {
    memoList: [],
};
export default MemoList;