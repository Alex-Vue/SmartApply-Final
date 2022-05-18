from django import forms
from users.models import Document

class DocumentForm(forms.ModelForm):
    class Meta:
        model = Document
        fields = ( 'document', )