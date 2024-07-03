import Image from "next/image";

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Image
                src="/pokemon_ball.gif"
                alt="Loading"
                width={50}
                height={50}
                className="animate-bounceY"
            />
        </div>
    );
};

export default LoadingSpinner;