type QuoteCardProps = {
    quote: string;
    author?: string;
};

export default function QuoteCard({ quote, author }: QuoteCardProps) {
    return (
        <div className="relative max-w-4xl mx-auto mt-16 px-14 py-10 text-white font-mono bg-[#2b2f36]">
            <div className="absolute inset-0 border border-gray-300 pointer-events-none" />
            <div className="absolute -bottom-px -right-px w-40 h-16 border border-gray-300 border-l-0 border-t-0 bg-[#2b2f36] pointer-events-none" />

            <span className="absolute -top-5 left-6 text-4xl text-gray-300 bg-[#2b2f36] px-2">
                “
            </span>

            <p className="text-xl leading-relaxed">{quote}</p>

            <span className="absolute -bottom-5 right-24 text-4xl text-gray-300 bg-[#2b2f36] px-2">
                ”
            </span>

            {author && (
                <span className="absolute bottom-5 right-6 text-sm text-gray-300">
                    – {author}
                </span>
            )}
        </div>
    );
}
