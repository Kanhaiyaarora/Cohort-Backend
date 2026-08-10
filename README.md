Notes App live link - https://cohort-backend-fbdj.onrender.com/

Docker notes - https://drive.google.com/file/d/1Qpyj_0CMbQhhTVCKyBay_oqyrYPyomt2/preview

Ingress Controller Download command => 
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.1/deploy/static/provider/cloud/deploy.yaml


env secrets in kubernetes command ==> (use bash)

kubectl create secret generic ai-secret \
> --from-literal=MISTRAL_API_KEY=your_key
