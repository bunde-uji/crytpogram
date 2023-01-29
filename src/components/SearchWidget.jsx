
function SearchWidget(props) {
    return (  
        <div className={`absolute left-0 top-[100%] w-full rounded-md overflow-hidden bg-gray-100 ${props.visible === true ? 'flex' : 'hidden'} flex-col z-[10000]`}>
            {props.content}
        </div>
    );
}

export default SearchWidget;