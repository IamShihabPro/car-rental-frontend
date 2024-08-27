
const Card = ({ title, content }: { title: string; content: string }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default Card;
