export default function Product({ params }: { params: { product: string } }) {
    return (
        <div>{params.product}</div>
    )
}