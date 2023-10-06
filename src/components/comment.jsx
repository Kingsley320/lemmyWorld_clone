import { BsFillFileMinusFill, BsLink45Deg, BsDot, BsPencil, BsArrowUpShort, BsArrowDownShort, BsReplyFill, BsThreeDotsVertical } from "react-icons/bs";

export default function Comment(props) {

    return (
        <div className="my-4 pb-3 border-b border-neutral-600">
            <div className="mx-3 flex justify-between text-neutral-400">
                <div className="flex gap-1">
                    <BsFillFileMinusFill className="my-auto" />
                    {props.user || "Kingsley"}
                    <BsLink45Deg className="my-auto" />
                </div>
                <div className="flex gap-1">
                    {props.likes || '0'} <BsDot className="my-auto" />
                    <BsPencil className="my-auto" />
                    {props.created || "some time ago"}
                </div>
            </div>
            <div className="my-3 mx-1">
                <p>{props.body || 'Be the first to comment'}</p>
            </div>
            <div className="mx-2 flex justify-between text-neutral-400">
                <div className="flex gap-2">
                    <BsArrowUpShort className="my-auto"/><small>{props.likes || "0"}</small>
                </div>
                <div className="flex gap-2">
                    <BsArrowDownShort className="my-auto"/><small>{props.dislikes || "0"}</small>
                </div>
                <div>
                    <BsReplyFill className="my-auto"/>
                </div>
                <div>
                    <BsThreeDotsVertical className="my-auto"/>
                </div>
            </div>
        </div>
    )
}